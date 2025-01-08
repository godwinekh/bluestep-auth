import EmergencyContactForm from "./EmergencyContactForm";
import PersonalDataForm from "./PersonalDataForm";
import { Tab } from "bootstrap";
import { Form, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import { TSignUpForm } from "../_types/form";
import { mockAPI } from "../_apis/mockApi";
import { useEffect, useState } from "react";

export default function SignUpForm() {
  const [apiResponse, setApiResponse] = useState<{
    message: string;
    result: boolean;
  } | null>(null);

  const formik = useFormik<TSignUpForm>({
    initialValues: {
      baseData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        birthDate: "",
        address: "",
      },
      emergencyContact: {
        name: "",
        relationship: "",
        phone: "",
        email: "",
        address: "",
        sameAddress: "no",
      },
    },
    validationSchema: Yup.object({
      baseData: Yup.object({
        firstName: Yup.string().required("Please enter your first name"),
        lastName: Yup.string().required("Please enter your last name"),
        email: Yup.string()
          .email("Invalid email address")
          .required("This is a required field"),
        phone: Yup.string().required("This is a required field"),
        birthDate: Yup.date()
          .required("This is a required field")
          .test(
            "is-old-enough",
            "You must be at least 18 years old",
            function (value) {
              const today = new Date();
              const birthDate = new Date(value);
              const age = today.getFullYear() - birthDate.getFullYear();
              const monthDifference = today.getMonth() - birthDate.getMonth();
              if (
                monthDifference < 0 ||
                (monthDifference === 0 && today.getDate() < birthDate.getDate())
              ) {
                return age - 1 >= 18;
              }
              return age >= 18;
            }
          ),
        address: Yup.string().required("This is a required field"),
      }),
      emergencyContact: Yup.object({
        name: Yup.string().required("This is a required field"),
        relationship: Yup.string().required("This is a required field"),
        email: Yup.string(),
        phone: Yup.string(),
        address: Yup.string().required("Please enter an address to continue"),
      }),
    }),
    onSubmit: async (values) => {
      console.log(values);

      // Call the mock API
      const response = await mockAPI(values);

      // Handle the response and trigger state to output the result
      setApiResponse(response);
    },
  });

  const handleTabChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const triggerEl = event.currentTarget;
    const tabTrigger = new Tab(triggerEl);
    tabTrigger.show();
  };

  // Standalone functions to handle the tab navigation (next)
  const handleNext = () => {
    const emergencyContactTab = document.getElementById(
      "emergency-contact-tab"
    );
    if (emergencyContactTab) {
      const tabTrigger = new Tab(emergencyContactTab);
      tabTrigger.show();
    }
  };

  // Standalone functions to handle the tab navigation (previous)
  const handlePrevious = () => {
    const personalDataTab = document.getElementById("personal-data-tab");
    if (personalDataTab) {
      const tabTrigger = new Tab(personalDataTab);
      tabTrigger.show();
    }
  };

  const { resetForm } = formik;


  useEffect(() => {
    // Clear the form if the API response is successful
    if (apiResponse?.result) {
      resetForm();
    }

    // Guard clause to check if the response message is available
    if (!apiResponse?.message) return;

    // Clear the response message after 5 seconds
    const timer = setTimeout(() => {
      setApiResponse(null);
    }, 5000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [apiResponse, resetForm]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <FormikProvider value={formik}>
        <Form
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className="py-5 w-50"
        >
          <ul className="nav nav-pills mb-3" id="form-pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="personal-data-tab"
                data-bs-toggle="pill"
                data-bs-target="#personal-data"
                type="button"
                role="tab"
                aria-controls="personal-data"
                aria-selected="true"
                onClick={handleTabChange}
              >
                Personal Information
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="emergency-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#emergency-contact"
                type="button"
                role="tab"
                aria-controls="emergency-contact"
                aria-selected="false"
                onClick={handleTabChange}
              >
                Emergency Contact Information
              </button>
            </li>
          </ul>

          <div className="tab-content" id="tabContent">
            <div
              className="tab-pane fade show active"
              id="personal-data"
              role="tabpanel"
              aria-labelledby="personal-data-tab"
              tabIndex={0}
            >
              <PersonalDataForm formik={formik} />
            </div>
            <div
              className="tab-pane fade"
              id="emergency-contact"
              role="tabpanel"
              aria-labelledby="emergency-contact-tab"
              tabIndex={1}
            >
              <EmergencyContactForm formik={formik} />
            </div>
          </div>

          <div className="d-flex justify-space-between align-items-center mt-5">
            <div className="row">
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              </div>

              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-success btn-md">
              Sign Up
            </button>
          </div>
        </Form>
      </FormikProvider>

      {apiResponse?.message && (
        <div
          className={`${
            apiResponse.result ? "alert-success" : "alert-danger"
          } alert py-2 px-5 w-50 mt-2`}
        >
          <p className="text-md text-uppercase text-center text-bold">
            {apiResponse.message}
          </p>
        </div>
      )}

      {/* Output a list of all the errors on the form when the button is clicked and errors exist */}
      <div className="w-50 mt-3">
        {formik.submitCount > 0 && Object.keys(formik.errors).length > 0 && (
          <div className="alert alert-danger">
            <ul>
              {Object.entries(formik.errors).map(([key, value]) => (
                <li key={key}>
                  {key}
                  <ol>
                    {Object.entries(value).map(([nestedKey, nestedValue]) => (
                      <li key={nestedKey}>
                        {nestedKey}: {nestedValue}
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
