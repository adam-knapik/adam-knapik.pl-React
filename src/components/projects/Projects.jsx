import React from 'react'
import './projects.css'
import IMG1 from '../../assets/project-1.jpg'
import IMG2 from '../../assets/project-2.jpg'
import IMG3 from '../../assets/project-3.jpg'
import IMG4 from '../../assets/project-4.jpg'
import IMG5 from '../../assets/project-5.jpg'
import IMG6 from '../../assets/project-6.jpg'

function Projects() {
  return (
    <section id='projects'>
      <h2>Projekty</h2>

      <div className='container projects__container'>
        <article className='project__item'>
          <div className='project__item-image'>
            <img src={IMG1} alt=''></img>
          </div>
          <h3>Weather APP - JS</h3>
          <div className='project__item-cta'>
            <a href='https://github.com/adam-knapik/WeatherApp-JS' className='btn' target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={IMG2} alt=''></img>
          </div>
          <h3>Zamówienia - PHP</h3>
          <div className='project__item-cta'>
            <a href='https://github.com/adam-knapik/OrderApp-PHP' className='btn' target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={IMG3} alt=''></img>
          </div>
          <h3>Microshell - C</h3>
          <div className='project__item-cta'>
            <a href='https://github.com/adam-knapik/Microshell-Project' className='btn' target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={IMG4} alt=''></img>
          </div>
          <h3>Mapping - VBS</h3>
          <div className='project__item-cta'>
            <a href='https://github.com/adam-knapik/DriveMapping-VBS' className='btn' target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={IMG5} alt=''></img>
          </div>
          <h3>FirstRest - Java</h3>
          <div className='project__item-cta'>
            <a href='https://github.com/adam-knapik/FirstRest-Java' className='btn' target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={IMG6} alt=''></img>
          </div>
          <h3>FirstApp - Kotlin</h3>
          <div className='project__item-cta'>
            <a href='https://github.com/adam-knapik/FirstApp-Kotlin' className='btn' target='_blank'>GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects