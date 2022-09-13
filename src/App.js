import { Field, Form, Formik } from 'formik'
import './header.css'

const App = () => {
  return(
    <div>
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={ async values => {
            console.log()
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
    </div>
  )
}

export default App