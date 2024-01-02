'use client'
import { Button } from '@/components/Button'
import { Input, TextArea } from '@/components/Input'
import styles from './FormContactUs.module.scss'

export type FormContactUsProps = {
  title?: string
}

export const FormContactUs = (props: FormContactUsProps) => {
  return (
    <form action="">
      <div className="row gty-24">
        <div className="col-6">
          <Input placeholder="Name" />
        </div>
        <div className="col-6">
          <Input placeholder="Email" />
        </div>
        <div className="col-12">
          <TextArea placeholder="Comments" rows={7} />
        </div>
      </div>
      <div className={styles.submitContainer}>
        <Button type="outline">Send</Button>
      </div>
    </form>
  )
}
