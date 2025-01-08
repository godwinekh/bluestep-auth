import { TFormType } from "../_types/form";
import { useState } from "react";

export default function EmergencyContactForm({ formik }: TFormType) {
  const { getFieldProps, setFieldValue, values, touched, errors } = formik;

  const [sameAddress, setSameAddress] = useState(false);

  const handleSameAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    setSameAddress(checked);

    if (checked) {
      setFieldValue("emergencyContact.sameAddress", "yes");
      setFieldValue("emergencyContact.address", values.baseData.address);
    } else {
      setFieldValue("emergencyContact.sameAddress", "no");
      setFieldValue("emergencyContact.address", "");
    }
  };

  return (
    <div className="" id="emergencyContact">
      <div className="row mb-2">
        <div className="col-sm-8">
          <label htmlFor="emergencyContact.name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="emergencyContact.name"
            className="form-control w-full"
            {...getFieldProps("emergencyContact.name")}
          />
          {touched.emergencyContact?.name && errors.emergencyContact?.name && (
            <p className="text-sm text-danger">
              {errors.emergencyContact.name}
            </p>
          )}
        </div>

        <div className="col-sm-4">
          <label htmlFor="emergencyContact.relationship" className="form-label">
            Relationship
          </label>
          <input
            type="text"
            id="emergencyContact.relationship"
            className="form-control w-full"
            {...getFieldProps("emergencyContact.relationship")}
          />

          {touched.emergencyContact?.relationship &&
            errors.emergencyContact?.relationship && (
              <p className="text-sm text-danger">
                {errors.emergencyContact.relationship}
              </p>
            )}
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-sm-6">
          <label htmlFor="emergencyContact.phone" className="form-label">
            Mobile Phone
          </label>
          <input
            type="tel"
            id="emergencyContact.phone"
            className="form-control w-full"
            {...getFieldProps("emergencyContact.phone")}
          />

          {touched.emergencyContact?.phone &&
            errors.emergencyContact?.phone && (
              <p className="text-sm text-danger">
                {errors.emergencyContact.phone}
              </p>
            )}
        </div>

        <div className="col-sm-6">
          <label htmlFor="emergencyContact.email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="emergencyContact.email"
            className="form-control w-full"
            {...getFieldProps("emergencyContact.email")}
          />

          {touched.emergencyContact?.email &&
            errors.emergencyContact?.email && (
              <p className="text-sm text-danger">
                {errors.emergencyContact.email}
              </p>
            )}
        </div>
      </div>

      <div className="mb-2">
        <label htmlFor="emergencyContact.address" className="form-label">
          Contact Address
        </label>
        <input
          type="text"
          id="emergencyContact.address"
          className="form-control w-full"
          {...getFieldProps("emergencyContact.address")}
          disabled={sameAddress}
        />

        {touched.emergencyContact?.address &&
          errors.emergencyContact?.address && (
            <p className="text-sm text-danger">
              {errors.emergencyContact.address}
            </p>
          )}
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={sameAddress}
          onChange={handleSameAddress}
        />
        <label className="form-check-label">Same as my address</label>
      </div>
    </div>
  );
}
