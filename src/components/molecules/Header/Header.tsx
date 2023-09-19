import { FormSearch } from '@/components/atoms/Form/FormSearch'
import { Logo } from '@/components/atoms/Logo'
import Link from 'next/link'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <header>
      <div className="container">
        <div>
          <div className="row gtx-12">
            <div className="col-lg-6">
              Miễn phí ship cho đơn hàng trên 500.000đ
            </div>
            <div className="col-lg-6">
              <div>
                <Link href="/faq">FAQ</Link>
                <Link href="/contact">Liên hệ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <div>
            <FormSearch />
          </div>
          <div>
            <Logo />
          </div>
        </div>
      </div>
    </header>
  )
}
