import React, {FC} from "react"
import {useFormik} from "formik";
import classNames from "classnames"

type FieldModel = {
  type: 'text' | 'password'
  name: string
  placeholder: string
  iconClassName: string
}

type Props = {
  fields: Array<FieldModel>
  validationSchema: any
  submitBtnText: string
  onSubmit: (values:any)=>void
}


const Form: FC<Props> = ({fields, validationSchema, submitBtnText,onSubmit}) => {
  const initialValues: any = {}
  fields.forEach(field=>{
    initialValues[field.name] = ''
  })
  const form = useFormik({initialValues, validationSchema, onSubmit})

  return (
    <form className="form" onSubmit={form.handleSubmit}>
      {fields.map((field, ind) => (
        <div className={classNames('input-group', {'has-danger': form.touched[field.name] && form.errors[field.name]})}
             key={ind}>
          <div className="input-group-prepend">
          <span className="input-group-text">
            <i className={field.iconClassName}/>
          </span>
          </div>
          <div className="flex-auto">
            <input
              className="form-control"
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched[field.name] && form.errors[field.name] && (
              <span className="bmd-label-floating">{form.errors[field.name]}</span>)}
          </div>
        </div>
      ))}
      <div className="text-center">
        <button type="submit" className="btn btn-rose btn-link">{submitBtnText}</button>
      </div>
    </form>
  )
}

export default Form