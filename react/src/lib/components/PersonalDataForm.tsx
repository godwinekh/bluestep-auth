import { TFormType } from "../_types/form";

export default function PersonalDataForm({ formik }: TFormType) {
  const { getFieldProps, touched, errors } = formik;

  return (
    <div className="" id="personalInformation">
      <div className="row mb-3">
        <div className="col-sm-6">
          <label htmlFor="baseData.firstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            id="baseData.firstName"
            className="form-control w-full"
            {...getFieldProps("baseData.firstName")}
          />

          {touched.baseData?.firstName && errors.baseData?.firstName && (
            <p className="text-sm text-danger">{errors.baseData.firstName}</p>
          )}
        </div>

        <div className="col-sm-6">
          <label htmlFor="baseData.lastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            id="baseData.lastName"
            className="form-control w-full"
            {...getFieldProps("baseData.lastName")}
          />
          {touched.baseData?.lastName && errors.baseData?.lastName && (
            <p className="text-sm text-danger">{errors.baseData.lastName}</p>
          )}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="baseData.email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="baseData.email"
          className="form-control w-full"
          {...getFieldProps("baseData.email")}
        />
        {touched.baseData?.email && errors.baseData?.email && (
          <p className="text-sm text-danger">{errors.baseData.email}</p>
        )}
      </div>

      <div className="row mb-3">
        <div className="col-sm-6">
          <label htmlFor="baseData.phone" className="form-label">
            Mobile Phone
          </label>
          <input
            type="text"
            id="baseData.phone"
            className="form-control w-full"
            {...getFieldProps("baseData.phone")}
          />
          {touched.baseData?.phone && errors.baseData?.phone && (
            <p className="text-sm text-danger">{errors.baseData.phone}</p>
          )}
        </div>

        <div className="col-sm-6">
          <label htmlFor="baseData.birthDate" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            id="baseData.birthDate"
            className="form-control w-full"
            {...getFieldProps("baseData.birthDate")}
          />
          {touched.baseData?.birthDate && errors.baseData?.birthDate && (
            <p className="text-sm text-danger">{errors.baseData.birthDate}</p>
          )}
        </div>
      </div>

      <div className="col-12 mb-3">
        <label htmlFor="baseData.address" className="form-label">
          Address
        </label>
        <input
          type="text"
          id="baseData.address"
          className="form-control w-full"
          {...getFieldProps("baseData.address")}
        />
        {touched.baseData?.address && errors.baseData?.address && (
          <p className="text-sm text-danger">{errors.baseData.address}</p>
        )}
      </div>
    </div>
  );
}
