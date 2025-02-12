import React, { useEffect } from 'react'
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminFooter from '../../components/Admin/AdminFooter'
import { Link, useLocation } from 'react-router-dom'
import { toggleLinkClass } from '../../Utils/Generals'
import RoutePaths from '../../config'


const AdminPanel = ({currentComponent} : {currentComponent : React.ReactNode}) => {

  useEffect(() => {

    document.querySelectorAll('html,body, #root').forEach((e) => e.classList.add('h-100' ,'overflow-hidden'));
  }, [])

    
  return (
    <>
      <div className="admin-container h-100">
        <AdminHeader />
        <div className='admin-section d-flex justify-content-between gap-4 px-5 my-4 h-75'>
              <aside className='user-page w-25 fw-bold border border-1'>
                  <div><Link to={RoutePaths.admin} className={toggleLinkClass(RoutePaths.admin)}>Dashboard<i className="bi bi-house float-end"></i></Link></div>
                  <div><Link to={RoutePaths.adminProducts}  className={toggleLinkClass(RoutePaths.adminProducts)}>Products<i className="bi bi-newspaper float-end"></i></Link></div>
                  <div><Link to={RoutePaths.adminCategories}  className={toggleLinkClass(RoutePaths.adminCategories)}>Categories<i className="bi bi-bookmark float-end"></i></Link></div>
                  <div><Link to={RoutePaths.adminSlides}  className={toggleLinkClass(RoutePaths.adminSlides)}>Slideshow<i className="bi bi-newspaper float-end"></i></Link></div>
                  <div><Link to={RoutePaths.adminCustomers}  className={toggleLinkClass(RoutePaths.adminCustomers)}>Customers<i className="bi bi-people float-end"></i></Link></div>
                  <div><Link to={RoutePaths.adminBlog}  className={toggleLinkClass(RoutePaths.adminBlog)}>Blog<i className="bi bi-book float-end"></i></Link></div>
                  <div><Link to={RoutePaths.adminAccount}  className={toggleLinkClass(RoutePaths.adminAccount)}>Account<i className="bi bi-person float-end"></i></Link></div>
              </aside>
              <div className="w-75 overflow-auto scroller">
                {currentComponent}
              </div>
          </div>
        <AdminFooter />
      </div>
    </>
  )
}

export default AdminPanel