import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
} from "react-native";
import { BlurView } from "expo-blur";
import { router, type Href } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const LOGIN_BACKGROUND = require("../../../assets/images/login-bg.jpg");

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Temporary login for UI testing.
    // Real authentication will be connected later.
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />

      {/* Background image */}
      <ImageBackground
        source={LOGIN_BACKGROUND}
        resizeMode="cover"
        style={styles.background}
      >
        {/* Blur */}
        <BlurView
          intensity={48}
          tint="dark"
          style={StyleSheet.absoluteFill}
        />

        {/* Blue / dark overlay */}
        <View style={styles.overlay} />
      </ImageBackground>

      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={styles.keyboardView}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* Brand */}
            <View style={styles.brandSection}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>M</Text>
              </View>

              <Text style={styles.brandName}>Malay MM</Text>
            </View>

            {/* Login panel */}
            <BlurView
              intensity={25}
              tint="light"
              style={styles.loginPanel}
            >
              <View style={styles.panelOverlay} />

              {/* Header */}
              <View style={styles.header}>
                <Text style={styles.title}>Welcome back</Text>

                <Text style={styles.subtitle}>
                  Sign in to continue with Malay MM.
                </Text>
              </View>

              {/* Form */}
              <View style={styles.form}>
                {/* Email */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Email</Text>

                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="you@example.com"
                    placeholderTextColor="#AAB4C3"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                  />
                </View>

                {/* Password */}
                <View style={styles.inputGroup}>
                  <View style={styles.passwordHeader}>
                    <Text style={styles.label}>Password</Text>

                    <Pressable
                      onPress={() => setShowPassword(!showPassword)}
                      hitSlop={8}
                    >
                      <Text style={styles.showPassword}>
                        {showPassword ? "Hide" : "Show"}
                      </Text>
                    </Pressable>
                  </View>

                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    placeholderTextColor="#AAB4C3"
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                  />
                </View>

                {/* Forgot password */}
                <Pressable
                  onPress={() =>
                    router.push("/forgot-password" as Href)
                  }
                  style={styles.forgotButton}
                  hitSlop={8}
                >
                  <Text style={styles.forgotText}>
                    Forgot password?
                  </Text>
                </Pressable>

                {/* Login */}
                <Pressable
                  onPress={handleLogin}
                  style={({ pressed }) => [
                    styles.loginButton,
                    pressed && styles.buttonPressed,
                  ]}
                >
                  <Text style={styles.loginButtonText}>
                    Log in
                  </Text>
                </Pressable>
              </View>

              {/* Divider */}
              <View style={styles.dividerRow}>
                <View style={styles.divider} />

                <Text style={styles.dividerText}>
                  or continue with
                </Text>

                <View style={styles.divider} />
              </View>

              {/* Social buttons */}
              <View style={styles.socialRow}>
                <Pressable
                  style={({ pressed }) => [
                    styles.socialButton,
                    pressed && styles.socialPressed,
                  ]}
                >
                  <Text style={styles.googleIcon}>G</Text>
                  <Text style={styles.socialText}>Google</Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [
                    styles.socialButton,
                    pressed && styles.socialPressed,
                  ]}
                >
                  <Text style={styles.appleIcon}>●</Text>
                  <Text style={styles.socialText}>Apple</Text>
                </Pressable>
              </View>

              {/* Sign up */}
              <View style={styles.signupRow}>
                <Text style={styles.signupText}>
                  Don&apos;t have an account?
                </Text>

                <Pressable
                  onPress={() => router.push("/signup" as Href)}
                  hitSlop={8}
                >
                  <Text style={styles.signupLink}>
                    {" "}Sign up
                  </Text>
                </Pressable>
              </View>
            </BlurView>

            {/* Footer */}
            <Text style={styles.footer}>
              By continuing, you agree to our Terms and Privacy Policy.
            </Text>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#071A31",
  },

background: {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
},
 overlay: {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "rgba(3, 18, 40, 0.48)",
},

  safeArea: {
    flex: 1,
  },

  keyboardView: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 28,
  },

  /* Brand */

  brandSection: {
    alignItems: "center",
    marginBottom: 24,
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#3195F5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "800",
  },

  brandName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: -0.3,
  },

  /* Login panel */

  loginPanel: {
    overflow: "hidden",
    borderRadius: 28,
    paddingHorizontal: 22,
    paddingTop: 25,
    paddingBottom: 24,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    backgroundColor: "rgba(255,255,255,0.14)",
  },

 panelOverlay: {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "rgba(255,255,255,0.08)",
},

  /* Header */

  header: {
    marginBottom: 26,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    lineHeight: 37,
    fontWeight: "800",
    letterSpacing: -0.8,
    marginBottom: 9,
  },

  subtitle: {
    color: "rgba(255,255,255,0.76)",
    fontSize: 14,
    lineHeight: 21,
  },

  /* Form */

  form: {
    width: "100%",
  },

  inputGroup: {
    marginBottom: 18,
  },

  label: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8,
  },

  input: {
    height: 54,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.28)",
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.14)",
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#FFFFFF",
  },

  passwordHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  showPassword: {
    color: "#BFE0FF",
    fontSize: 13,
    fontWeight: "600",
  },

  forgotButton: {
    alignSelf: "flex-end",
    marginTop: -2,
    marginBottom: 22,
  },

  forgotText: {
    color: "#C9E6FF",
    fontSize: 13,
    fontWeight: "600",
  },

  loginButton: {
    height: 54,
    borderRadius: 15,
    backgroundColor: "#3195F5",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.22,
    shadowRadius: 12,
    elevation: 5,
  },

  buttonPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.985 }],
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  /* Divider */

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.20)",
  },

  dividerText: {
    marginHorizontal: 11,
    color: "rgba(255,255,255,0.60)",
    fontSize: 11,
  },

  /* Social */

  socialRow: {
    flexDirection: "row",
    gap: 10,
  },

  socialButton: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.12)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  socialPressed: {
    backgroundColor: "rgba(255,255,255,0.20)",
  },

  googleIcon: {
    fontSize: 17,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  appleIcon: {
    fontSize: 14,
    color: "#FFFFFF",
  },

  socialText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  /* Sign up */

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  signupText: {
    fontSize: 13,
    color: "rgba(255,255,255,0.70)",
  },

  signupLink: {
    fontSize: 13,
    fontWeight: "700",
    color: "#C9E6FF",
  },

  /* Footer */

  footer: {
    textAlign: "center",
    fontSize: 10,
    lineHeight: 16,
    color: "rgba(255,255,255,0.55)",
    marginTop: 20,
    paddingHorizontal: 18,
  },
});