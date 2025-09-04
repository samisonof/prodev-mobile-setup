import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function Signin() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        {/* Title */}
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Sign In</Text>
          <Text style={styles.subText}>Welcome back! Please login to continue</Text>
        </View>

        {/* Form */}
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput placeholder="Enter your email" style={styles.formControl} keyboardType="email-address" />
          </View>
          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput placeholder="Enter your password" style={styles.passwordControl} secureTextEntry />
            </View>
          </View>
        </View>

        {/* Forgot Password */}
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

        {/* Primary Button */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider}></View>
        </View>

        {/* Social Buttons */}
        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={GOOGLELOGO} style={{ width: 20, height: 20 }} />
            <Text style={styles.secondaryButtonText}>Sign in with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={FACEBOOKLOGO} style={{ width: 20, height: 20 }} />
            <Text style={styles.secondaryButtonText}>Sign in with Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Signup Redirect */}
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/join")}>
            <Text style={styles.signupSubTitleText}>Join</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
