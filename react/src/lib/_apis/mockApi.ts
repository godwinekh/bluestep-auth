import { TSignUpForm } from "../_types/form";
import { UserHelper } from "../database/userHelper";

export const myfunApi = async (body: TSignUpForm) => {
  console.log(body)
  // try {
  //   const response = await httpService.post("“myfunapi.fake/user/signup", body); // httpService such as axios instance
  //   return response.data;
  // } catch (error) {
  //   console.error('Error making POST request:', error);
  //   throw error;
  // }
};

export async function mockAPI(userData: TSignUpForm) {
  try {
    const userHelper = new UserHelper();
    const user = userHelper.create();

    const { baseData, emergencyContact } = userData;

    const fullName = `${baseData.firstName} ${baseData.lastName}`;

    // Check if required fields are present, then call all required setters.
    // The function would exit if anyone of them fails.
    if (!fullName || !baseData.email) {
      return { message: "Full name and email are required.", result: false };
    }

    if (!user.setFullName(fullName)) {
      return { message: "Failed to set full name.", result: false };
    }

    if (!user.setEmail(baseData.email)) {
      return { message: "Failed to set email.", result: false };
    }

    if (baseData.phone && !user.setPhone(baseData.phone)) {
      return { message: "Failed to set phone.", result: false };
    }

    if (baseData.address && !user.setAddress(baseData.address)) {
      return { message: "Failed to set address.", result: false };
    }

    if (
      emergencyContact.name &&
      !user.setEmergencyContactName(emergencyContact.name)
    ) {
      return {
        message: "Failed to set emergency contact name.",
        result: false,
      };
    }

    if (
      emergencyContact.phone &&
      !user.setEmergencyContactPhone(emergencyContact.phone)
    ) {
      return {
        message: "Failed to set emergency contact phone.",
        result: false,
      };
    }

    if (
      emergencyContact.address &&
      !user.setEmergencyContactAddress(emergencyContact.address)
    ) {
      return {
        message: "Failed to set emergency contact address.",
        result: false,
      };
    }

    if (
      emergencyContact.relationship &&
      !user.setEmergencyContactRelationship(
        emergencyContact.relationship
      )
    ) {
      return {
        message: "Failed to set emergency contact relationship.",
        result: false,
      };
    }

    if (
      emergencyContact.email &&
      !user.setEmergencyContactEmail(emergencyContact.email)
    ) {
      return {
        message: "Failed to set emergency contact email.",
        result: false,
      };
    }

    if (!userHelper.save(user)) {
      return { message: "Failed to save user.", result: false };
    }

    return { message: "User created successfully.", result: true };
  } catch (error) {
    return { message: `An error occurred: ${error}`, result: false };
  }
}


/*
export async function mockAPI(userData: TSignUpForm) {
  return { message: 'User created successfully.', result: true };
}
*/
