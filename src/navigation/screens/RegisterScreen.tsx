import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styl } from "../../utils/styles";
import { ThemedText } from "../../components/ThemedText";
import { ThemedView } from "../../components/ThemedView";
import StyledBtn from "../../components/StyledBtn";
import { useFormik } from "formik";
import { ThemedTxtField } from "../../components/ThemedTxtField";
import { useNavigation } from "@react-navigation/native";
import { registrationSchema } from "../../utils/auth-schemas";
import { useState } from "react";
import { Loader } from "../../components/Loader";
import { delay } from "../../service/example.service";
import { NavigationProps } from "../types";

export const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProps["navigation"]>();
  const [isLoading, setLoading] = useState(false);

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: async ({ email, password }) => {
        setLoading(true);
        try {
          console.log("submitting.. ", email, password);
          await delay(1500);
        } catch (error: any) {
          Alert.alert("😱 An error occured! ", error.message);
        } finally {
          setLoading(false);
        }
      },
      validationSchema: registrationSchema,
    }
  );

  return isLoading ? (
    <Loader />
  ) : (
    <ThemedView style={styl.container}>
      <ThemedText center type="title">
        Register account
      </ThemedText>

      <View
        style={{
          margin: 10,
          padding: 15,
          gap: 5,
        }}
      >
        <ThemedTxtField
          placeholder="email"
          onBlur={handleBlur("email")}
          onChangeText={handleChange("email")}
          errorLabel={touched.email && errors.email?.length ? errors.email : ""}
        />
        <ThemedTxtField
          placeholder="password"
          secureTextEntry
          errorLabel={
            touched.password && errors.password?.length ? errors.password : ""
          }
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
        />
        <ThemedTxtField
          placeholder="confirm password"
          secureTextEntry
          errorLabel={
            touched.confirmPassword && errors.confirmPassword?.length
              ? errors.confirmPassword
              : ""
          }
          onChangeText={handleChange("confirmPassword")}
          onBlur={handleBlur("confirmPassword")}
        />
        <StyledBtn
          label="submit"
          onPress={() => {
            handleSubmit();
          }}
        />
      </View>

      <TouchableOpacity
        style={{ margin: 25 }}
        onPress={() => {
          console.log("Submit clicked");
          navigation.navigate('HomeScreen');
        }}
      >
      <ThemedText center type='link'>
        Go to home
      </ThemedText>

      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({});
