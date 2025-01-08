// -----------------------------------------------------------
// USER OBJECT AND USERHELPER LIBRARY
// ----------------------------------------------------------

const DUMMY_DB = [];

function User() {
  this.data = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactAddress: "",
    emergencyContactRelationship: "",
    emergencyContactEmail: "",
    sameAddress: "",
  };
  this.message = "";
  this.result = false;
}

User.prototype.setFullName = function (value) {
  if (value) {
    this.data.fullName = value;
    return true;
  }
  return false;
};

User.prototype.setEmail = function (value) {
  if (value) {
    this.data.email = value;
    return true;
  }
  return false;
};

User.prototype.setPhone = function (value) {
  if (value) {
    this.data.phone = value;
    return true;
  }
  return false;
};

User.prototype.setAddress = function (value) {
  if (value) {
    this.data.address = value;
    return true;
  }
  return false;
};

User.prototype.setEmergencyContactName = function (value) {
  if (value) {
    this.data.emergencyContactName = value;
    return true;
  }
  return false;
};

User.prototype.setEmergencyContactPhone = function (value) {
  if (value) {
    this.data.emergencyContactPhone = value;
    return true;
  }
  return false;
};

User.prototype.setEmergencyContactAddress = function (value) {
  if (value) {
    this.data.emergencyContactAddress = value;
    return true;
  }
  return false;
};

User.prototype.setEmergencyContactRelationship = function (value) {
  if (value) {
    this.data.emergencyContactRelationship = value;
    return true;
  }
  return false;
};

User.prototype.setEmergencyContactEmail = function (value) {
  if (value) {
    this.data.emergencyContactEmail = value;
    return true;
  }
  return false;
};

const UserHelper = {
  create: () => new User(),

  save: (user) => {
    if (!user.data.fullName && !user.data.email) {
      user.message = "Please enter your full name and email address.";
    } else if (!user.data.fullName) {
      user.message = "Please enter your full name.";
    } else if (!user.data.email) {
      user.message = "Please enter your email address.";
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
  },
};

// ------------------------------------------------------------
// MOCK API TO CREATE DUMMY USERS
// -------------------------------------------------------------

const myfunApi = async (body) => {
  console.log(body);
  // try {
  //   const response = await httpService.post("“myfunapi.fake/user/signup", body); // httpService such as axios instance
  //   return response.data;
  // } catch (error) {
  //   console.error('Error making POST request:', error);
  //   throw error;
  // }
};

async function mockAPI(userData) {
  try {
    const user = UserHelper.create();

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
      !user.setEmergencyContactRelationship(emergencyContact.relationship)
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

    if (!UserHelper.save(user)) {
      return { message: "Failed to save user.", result: false };
    }

    return { message: "User created successfully.", result: true };
  } catch (error) {
    return { message: `An error occurred: ${error}`, result: false };
  }
}

/*
export async function mockAPI(userData) {
  return { message: 'User created successfully.', result: true };
}
*/

//-------------------------------------------------------------
// FUNCTIONS AND EVENT HANDLERS TO MANAGE HTML FORM
// ----------------------------------------------------------

// Function to handle the checkbox change event
function handleSameAddress(event) {
  const isChecked = event.target.checked;
  console.log("Same address checkbox is checked:", isChecked);

  //  Get the address and emergencyAddress fields
  const addressField = document.getElementById("address");
  const emergencyContactAddressField = document.getElementById(
    "emergencyContactAddress"
  );

  if (isChecked) {
    emergencyContactAddressField.value = addressField.value;
    emergencyContactAddressField.disabled = true;
  } else {
    emergencyContactAddressField.value = "";
    emergencyContactAddressField.disabled = false;
  }
}

// Function to validate form inputs
function validateForm(userData) {
  const errors = [];

  if (!userData.firstName || !userData.lastName) {
    errors.push("First and last names are required.");
  }

  if (!userData.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(userData.email)) {
    errors.push("Valid email is required.");
  }

  if (!userData.phone) {
    errors.push("Phone number is required.");
  }

  if (!userData.birthdate || new Date(userData.birthdate) > new Date()) {
    errors.push("A valid date of birth is required.");
  } else {
    const birthDate = new Date(userData.birthdate);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    const monthDifference = new Date().getMonth() - birthDate.getMonth();

    // Adjust age if birth month hasn't occurred yet this year
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && new Date().getDate() < birthDate.getDate())
    ) {
      if (age - 1 < 18) {
        errors.push("You must be at least 18 years old.");
      }
    }
  }

  if (!userData.address) {
    errors.push("Address is required.");
  }

  if (!userData.emergencyContactName) {
    errors.push("Emergency contact name is required.");
  }

  if (!userData.emergencyContactRelationship) {
    errors.push("Emergency contact relationship is required.");
  }

  if (!userData.emergencyContactAddress) {
    errors.push("Emergency contact address is required.");
  }

  return errors;
}

function handleSubmit(event) {
  event.preventDefault();

  console.log(event);

  const form = document.getElementById("signupForm");
  const formData = new FormData(form);

  const userData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    birthdate: formData.get("birthDate"),
    address: formData.get("address"),
    emergencyContactName: formData.get("emergencyContactName"),
    emergencyContactRelationship: formData.get("emergencyContactRelationship"),
    emergencyContactAddress: formData.get("emergencyContactAddress"),
    emergencyContactPhone: formData.get("emergencyContactPhone"),
    emergencyContactEmail: formData.get("emergencyContactEmail"),
  };

  const errors = validateForm(userData);

  const messageDiv = document.getElementById("message");
  // Clear previous messages
  messageDiv.innerHTML = "";

  if (errors.length > 0) {
    messageDiv.className = "alert alert-danger";
    const ulElement = document.createElement("ul");
    errors.forEach((error) => {
      const liElement = document.createElement("li");
      liElement.textContent = error;
      ulElement.appendChild(liElement);
    });
    messageDiv.appendChild(ulElement);
    return;
  }

  console.log("Form Data:", userData);

  // Mock API call
  const response = mockAPI(userData);

  if (!response.result) {
    messageDiv.className = "alert alert-danger";
    messageDiv.textContent = response.message;
  }

  messageDiv.className = "alert alert-success";
  messageDiv.textContent = response.message || "Form submitted successfully!";
}

// next and prev event handler
document.addEventListener("DOMContentLoaded", function () {
  const tabs = ["#personal-data-tab", "#emergency-contact-tab"];
  let currentTabIndex = 0;

  function showTab(index) {
    const tabTrigger = new bootstrap.Tab(document.querySelector(tabs[index]));
    tabTrigger.show();
  }

  document.querySelector("#previous-button").addEventListener("click", () => {
    if (currentTabIndex > 0) {
      currentTabIndex--;
      showTab(currentTabIndex);
    }
  });

  document.querySelector("#next-button").addEventListener("click", () => {
    if (currentTabIndex < tabs.length - 1) {
      currentTabIndex++;
      showTab(currentTabIndex);
    }
  });
});

// sameAddress checkbox event handler
document
  .querySelector("#sameAddress")
  .addEventListener("change", handleSameAddress);

// overall form event handler
document.querySelector("form").addEventListener("submit", handleSubmit);
