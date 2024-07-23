import PropTypes from 'prop-types'

import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function Layout({ children }) {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className='content min-h-screen'>
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
