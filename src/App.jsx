import './App.scss'
import Header from '../src/common/Header/Header'
import Footer from './common/Footer/Footer'
import SliderItem from './components/SliderItem/SliderItem'
// import Course from './components/Course/Course'
import CourseItem from './components/CourseItem/CourseItem'

function App() {
  return (
    <>
      <Header />
      <SliderItem />
      <CourseItem/>
      <Footer />
    </>
  )
}

export default App