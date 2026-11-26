using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    /// <summary>Box meshes with metre-based UVs so textures keep their scale on any wall size.</summary>
    public static class MeshKit
    {
        static readonly Dictionary<Vector3, Mesh> Boxes = new Dictionary<Vector3, Mesh>();

        public static Mesh Box(Vector3 size)
        {
            Vector3 key = new Vector3(Mathf.Round(size.x * 100f), Mathf.Round(size.y * 100f), Mathf.Round(size.z * 100f));
            if (Boxes.TryGetValue(key, out var m) && m != null) return m;
            m = Build(size);
            Boxes[key] = m;
            return m;
        }

        static Mesh Build(Vector3 s)
        {
            Vector3 h = s * 0.5f;
            var v = new List<Vector3>();
            var n = new List<Vector3>();
            var uv = new List<Vector2>();
            var tri = new List<int>();
            void Face(Vector3 normal, Vector3 u, Vector3 w, float du, float dw)
            {
                // corners: center of face +/- u,w half-extents
                Vector3 c = Vector3.Scale(normal, h);
                Vector3 uu = u * (du * 0.5f), ww = w * (dw * 0.5f);
                int b = v.Count;
                v.Add(c - uu - ww); v.Add(c + uu - ww); v.Add(c + uu + ww); v.Add(c - uu + ww);
                for (int i = 0; i < 4; i++) n.Add(normal);
                uv.Add(new Vector2(0, 0)); uv.Add(new Vector2(du, 0)); uv.Add(new Vector2(du, dw)); uv.Add(new Vector2(0, dw));
                tri.Add(b); tri.Add(b + 2); tri.Add(b + 1); tri.Add(b); tri.Add(b + 3); tri.Add(b + 2);
            }
            Face(Vector3.forward, Vector3.left, Vector3.up, s.x, s.y);
            Face(Vector3.back, Vector3.right, Vector3.up, s.x, s.y);
            Face(Vector3.right, Vector3.forward, Vector3.up, s.z, s.y);
            Face(Vector3.left, Vector3.back, Vector3.up, s.z, s.y);
            Face(Vector3.up, Vector3.right, Vector3.forward, s.x, s.z);
            Face(Vector3.down, Vector3.left, Vector3.forward, s.x, s.z);
            var m = new Mesh { name = "Box" };
            m.SetVertices(v);
            m.SetNormals(n);
            m.SetUVs(0, uv);
            m.SetTriangles(tri, 0);
            m.RecalculateBounds();
            m.RecalculateTangents();
            return m;
        }
    }
}
