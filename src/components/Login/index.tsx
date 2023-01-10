import Image from 'next/image'
import { FC } from 'react'
import Button from '../_common/Button'
import Input from '../_common/Input'
import s from './styles.module.sass'

const Login: FC = () => {
  return (
    <section className={`${s.login} container`}>
      <div className={s.login_companiesBlock}>
        <h2>
          See why the world’s best companies use Qubly to become truly
          data-driven.
        </h2>
        <p className={s.login_trustedBy}>Trusted by</p>
        <div className={s.login_companies}>
          <div className={`${s.login_company} ${s.company1}`} />
          <div className={`${s.login_company} ${s.company2}`} />
          <div className={`${s.login_company} ${s.company3}`} />
          <div className={`${s.login_company} ${s.company4}`} />
        </div>
      </div>
      <div className={s.login_formBlock}>
        <form className={s.login_formWrapper}>
          <h2>Sign Up</h2>
          <div className={s.login_buttonWrapper}>
            <Button type='submit' fullWidth text='Start your free trial' />
          </div>
          <Input type='email' placeholder='Your primary email' />
          <Input type='password' placeholder='Password' />
          <Input type='password' placeholder='Re-type Password' />
          <p>OR</p>
          <button className={s.login_google} />
          <div className={s.login_switchForm}>
            <p>Already have an account?</p>
            <button className={s.login_switchButton}>Login</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
