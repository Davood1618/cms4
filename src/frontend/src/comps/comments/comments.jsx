import React from 'react'
import Error from './../error/error'
import './comments.css'

export default function comments() {

  return (
    <div>
      {/* <Error title={"کامنت"}/> */}

      <div className='commentMainWrapper'>
        <div className="commentsMainContainer">

          <div className="tableWrapper">

        
          
              <td className="commenstTd">کاربر</td>
              <td className="commenstTd">محصول</td>
              <td className="commenstTd">کامنت</td>
              <td className="commenstTd">تاریخ</td>
              <td className="commenstTd">ساعت</td>
              <td className="commenstTd">

              </td>
           
           
              <td className="commenstTd">علی</td>
              <td className="commenstTd">شارژر تایپ سی</td>
              <td className="commenstTd">دیدن متن</td>
              <td className="commenstTd">1400-07-09</td>
              <td className="commenstTd">12:01</td>
              <td className="commenstTd">
                <button className="btn btn-primary commentsBtn">حذف</button>
                <button className="btn btn-primary commentsBtn">ویرایش</button>
                <button className="btn btn-primary commentsBtn">پاسخ</button>
                <button className="btn btn-primary commentsBtn">تایید</button>
              </td>
          
           
              <td className="commenstTd">حسین</td>
              <td className="commenstTd">هندزفری بلوتوثی</td>
              <td className="commenstTd">دیدن متن</td>
              <td className="commenstTd">1400-07-09</td>
              <td className="commenstTd">12:01</td>
              <td className="commenstTd">
              <button className="btn btn-primary commentsBtn">حذف</button>
                <button className="btn btn-primary commentsBtn">ویرایش</button>
                <button className="btn btn-primary commentsBtn">پاسخ</button>
                <button className="btn btn-primary commentsBtn">تایید</button>
              </td>
          
          </div>
        </div>


      </div>


    </div>
  )
}
