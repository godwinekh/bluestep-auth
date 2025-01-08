const DUMMY_DB: User[] = [];

class User {
  data: {
    fullName: string;
    email: string;
    phone?: string;
    address?: string;
    emergencyContactName?: string;
    emergencyContactPhone?: string;
    emergencyContactAddress?: string;
    emergencyContactRelationship?: string;
    emergencyContactEmail?: string;
    sameAddress?: string;
  };
  message: string;
  result: boolean;

  constructor() {
    this.message = "";
    this.result = false;
    this.data = {
      fullName: "",
      email: "",
    };
  }

  setFullName(value: string): boolean {
    if (value) {
      this.data.fullName = value;
      return true;
    }
    return false;
  }

  setEmail(value: string): boolean {
    if (value) {
      this.data.email = value;
      return true;
    }
    return false;
  }

  setPhone(value: string): boolean {
    if (value) {
      this.data.phone = value;
      return true;
    }
    return false;
  }

  setAddress(value: string): boolean {
    if (value) {
      this.data.address = value;
      return true;
    }
    return false;
  }

  setEmergencyContactName(value: string): boolean {
    if (value) {
      this.data.emergencyContactName = value;
      return true;
    }
    return false;
  }

  setEmergencyContactPhone(value: string): boolean {
    if (value) {
      this.data.emergencyContactPhone = value;
      return true;
    }
    return false;
  }

  setEmergencyContactAddress(value: string): boolean {
    if (value) {
      this.data.emergencyContactAddress = value;
      return true;
    }
    return false;
  }

  setEmergencyContactRelationship(value: string): boolean {
    if (value) {
      this.data.emergencyContactRelationship = value;
      return true;
    }
    return false;
  }

  setEmergencyContactEmail(value: string): boolean {
    if (value) {
      this.data.emergencyContactEmail = value;
      return true;
    }
    return false;
  }
}

export class UserHelper {
  create() {
    return new User();
  }

  save(user: User): { result: boolean; message: string } {

    if (!user.data.fullName) {
      user.message = "Please enter your full name.";
    }

    if (!user.data.email) {
      user.message = "Please enter your email address.";
    }

    if (!user.data.fullName && !user.data.email) {
      user.message = "Please enter your full name and email address.";
    }

    if (user.data.fullName && user.data.email) {
      // Simulate saving the user to the database
      DUMMY_DB.push(user);
      
      user.result = true;
      user.message = "User saved successfully.";
      return { result: user.result, message: user.message };
    } else {
      user.result = false;
      return { result: user.result, message: user.message };
    }
  }
}
