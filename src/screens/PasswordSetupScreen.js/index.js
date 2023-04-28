import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import CustomCheckbox from '../../components/CustomCheckbox';
import { store } from '../../../store';
import { Field, Formik } from 'formik';
import { createPasswordValidationSchema } from '../../validationSchemas/verificationSchema';
import Toast from 'react-native-toast-message';
import { createPassword } from '../../services';

export default function PasswordSetupScreen({ navigation }) {
  const { state } = useContext(store);
  const [loading, setLoading] = useState(false);

  const onSubmitEvent = async (values) => {
    setLoading(true);
    const response = await createPassword(state.auth.userId, {
      password: values.password,
      confirmPassword: values.confirmPassword
    });
    setLoading(false);
    if (response.status == 404) {
      navigation.navigate('HelpScreen');
    } else if (response.status == 200) {
      // await dispatch({ type: 'SET_AUTH', payload: response.data.data });
      navigation.navigate('WelcomeScreen');
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong please try again later 🥲'
      });
    }
  };

  const label = (
    <>
      <Text style={{ fontSize: 12.5 }}>
        I agree to the Airlipay <Text style={{ color: '#2673D3' }}>Terms and Conditions </Text>
        and <Text style={{ color: '#48658A' }}>Privacy Policy</Text>
      </Text>
    </>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.info}>
        <Text style={styles.infoHeader}>Hello! first_name, last_name</Text>
        <View>
          <Text style={{ width: '80%', fontSize: 16 }}>
            Choose your password to access your Airlipay pay benefits. Use a mix of different
            letters, numbers, and symbols
          </Text>

          <View style={styles.confirmCode}>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <Text style={{ fontWeight: 700 }}>Username:</Text>
              <Text>{state.auth.email}</Text>
            </View>
            <Formik
              validationSchema={createPasswordValidationSchema}
              initialValues={{ password: '', confirmPassword: '' }}
              onSubmit={(values) => onSubmitEvent(values)}>
              {({ handleSubmit, isValid }) => (
                <>
                  <Field
                    component={CustomInput}
                    name="password"
                    placeholder="New password (Required)"
                    editable={!loading}
                  />

                  <Field
                    component={CustomInput}
                    name="confirmPassword"
                    placeholder="New password (Required)"
                    editable={!loading}
                  />
                  <View>
                    <CustomCheckbox label={label} />
                  </View>
                  <CustomButton
                    style={{ marginTop: 40 }}
                    title={
                      loading ? <ActivityIndicator size="small" color="#0000ff" /> : 'Confirm Code'
                    }
                    backgroundColor="#063B87"
                    color="white"
                    onPress={handleSubmit}
                    disabled={!isValid}
                  />
                </>
              )}
            </Formik>
          </View>
        </View>
      </View>
      <View style={styles.pageFooter}>
        <View style={styles.helpText}>
          <Text style={styles.frontText}>Need Help? </Text>
          <Text>© AirliPay 2023</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'white',
    padding: 40,
    flexDirection: 'column'
  },
  header: {
    flexDirection: 'row',
    top: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  info: {
    flex: 7
  },
  infoHeader: {
    fontWeight: 700,
    fontSize: 25,
    marginTop: 40,
    marginBottom: 20
  },
  pageFooter: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center'
  },
  helpText: {
    flexDirection: 'row'
  },
  frontText: {
    fontWeight: 600
  },
  noAccess: {
    alignSelf: 'center',
    fontWeight: 700,
    color: '#3F5F90',
    marginTop: 70
  },
  confirmCode: {
    marginTop: 20
  },
  text: {
    alignSelf: 'center',
    marginTop: 20
  }
});
