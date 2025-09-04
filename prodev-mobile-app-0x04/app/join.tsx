import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function Join() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        {/* Title */}
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Join Now</Text>
          <Text style={styles.subText}>Create an account to get started</Text>
        </View>

        {/* Form */}
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Full Name</Text>
            <TextInput placeholder="Enter your full name" style={styles.formControl} />
          </View>

          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput placeholder="Enter your email" style={styles.formControl} keyboardType="email-address" />
          </View>

          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput placeholder="Create a password" style={styles.passwordControl} secureTextEntry />
            </View>
          </View>
        </View>

        {/* Primary Button */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
            <Text style={styles.secondaryButtonText}>Sign up with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={FACEBOOKLOGO} style={{ width: 20, height: 20 }} />
            <Text style={styles.secondaryButtonText}>Sign up with Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Sign In Redirect */}
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/signin")}>
            <Text style={styles.signupSubTitleText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
