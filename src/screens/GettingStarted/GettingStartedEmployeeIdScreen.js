import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Toast from 'react-native-toast-message';
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import CustomHr from '../../components/CustomHr';
import { searchUserByEmployeeId } from '../../services';
import { useState } from 'react';
import { Field, Formik } from 'formik';
import { gettingStartedValidationSchema } from '../../validationSchemas/gettingStartedValidationSchema';
import { store } from '../../../store';
import { useContext } from 'react';

export default function GettingStartedEmployeeIdScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const goToLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };
  const goToGettingStartedPhoneScreen = () => {
    navigation.navigate('GettingStartedPhoneScreen');
  };
  const goToGettingStartedEmailScreen = () => {
    navigation.navigate('GettingStartedEmailScreen');
  };

  const onNextClick = async (values) => {
    setLoading(true);
    const response = await searchUserByEmployeeId(values.employeeId);
    setLoading(false);
    if (response.status == 404) {
      navigation.navigate('HelpScreen');
    } else if (response.status == 200) {
      await dispatch({ type: 'SET_AUTH', payload: response.data.data });
      navigation.navigate('VerifyIdentityScreen');
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong please try again later 🥲'
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.form}>
        <Text style={styles.formHeader}>Lets get started</Text>
        <View>
          <Formik
            validationSchema={gettingStartedValidationSchema}
            initialValues={{ employeeId: '', lastName: '' }}
            onSubmit={(values) => onNextClick(values)}>
            {({ handleSubmit, isValid }) => (
              <>
                <Field
                  component={CustomInput}
                  name="employeeId"
                  placeholder="Employee ID (required)"
                  editable={!loading}
                />
                <Field
                  component={CustomInput}
                  name="lastName"
                  placeholder="Last Name (required)"
                  editable={!loading}
                />
                <Field
                  component={CustomInput}
                  name="employer"
                  placeholder="Employer (optional)"
                  editable={!loading}
                />
                <CustomButton
                  title={loading ? <ActivityIndicator size="small" color="#0000ff" /> : 'Next'}
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
      <View style={styles.info}>
        <CustomHr style={styles.hr} text="or" />
        <CustomButton
          backgroundColor="transparent"
          title="Try your phone"
          color="grey"
          onPress={goToGettingStartedPhoneScreen}
        />
        <CustomButton
          backgroundColor="transparent"
          title="Try you Email"
          color="grey"
          onPress={goToGettingStartedEmailScreen}
        />
      </View>
      <View style={styles.pageFooter}>
        <Text style={styles.loginInstead} onPress={goToLoginScreen}>
          Login Instead
        </Text>
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
  form: {
    flex: 3,
    marginTop: 40
  },
  info: {
    flex: 2,
    marginTop: 30
  },
  hr: {
    marginBottom: 40
  },
  formHeader: {
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
  loginInstead: {
    fontWeight: 700,
    color: '#3F5F90',
    marginBottom: 20
  },
  helpText: {
    flexDirection: 'row'
  },
  frontText: {
    fontWeight: 600
  }
});
