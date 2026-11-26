using UnityEngine;

namespace Unseen
{
    /// <summary>Pure geometry for "can the player see this point". Line of sight is checked separately with physics.</summary>
    public static class ObservationMath
    {
        /// <summary>
        /// True when the point lies inside the camera's view frustum, enlarged by margin (0.15 = 15% wider)
        /// so objects just past the screen edge still count as observed and never visibly pop.
        /// </summary>
        public static bool InViewCone(Vector3 camPos, Vector3 forward, Vector3 up, float verticalFovDeg, float aspect,
                                      Vector3 point, float margin = 0.15f, float near = 0.05f, float maxDistance = 40f)
        {
            Vector3 f = forward.normalized;
            Vector3 r = Vector3.Cross(up, f).normalized;
            Vector3 u = Vector3.Cross(f, r);
            Vector3 d = point - camPos;
            float z = Vector3.Dot(d, f);
            if (z < near || z > maxDistance) return false;
            float tanV = Mathf.Tan(verticalFovDeg * 0.5f * Mathf.Deg2Rad) * (1f + margin);
            float tanH = tanV * aspect;
            return Mathf.Abs(Vector3.Dot(d, u)) <= z * tanV && Mathf.Abs(Vector3.Dot(d, r)) <= z * tanH;
        }

        /// <summary>Angle in degrees between the view direction and the direction to a point.</summary>
        public static float AngleTo(Vector3 camPos, Vector3 forward, Vector3 point)
        {
            Vector3 d = point - camPos;
            if (d.sqrMagnitude < 1e-6f) return 0f;
            return Vector3.Angle(forward, d);
        }
    }
}
