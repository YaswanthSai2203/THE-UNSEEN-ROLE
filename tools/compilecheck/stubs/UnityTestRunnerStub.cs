// Compile-check stub for Unity Test Framework attributes (the real ones ship with com.unity.test-framework).
using System;
namespace UnityEngine.TestTools
{
    [AttributeUsage(AttributeTargets.Method)] public class UnityTestAttribute : NUnit.Framework.TestAttribute { }
    [AttributeUsage(AttributeTargets.Method)] public class UnitySetUpAttribute : Attribute { }
    [AttributeUsage(AttributeTargets.Method)] public class UnityTearDownAttribute : Attribute { }
}
