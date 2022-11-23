import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import me1 from './me1.png'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className="top_info">
      <img src={me1} className="img" alt={name} />
      <div className='about center'>
        {name && (
          <>
            {/* <img src={me1} className="img" alt={name}/> */}
            <h1>
           <span className='about__name'>{name}</span>
            </h1>
          </>
        )}

        {role && <h2 className='about__role'>{role}</h2>}
        <p className='about__desc'>{description && description}</p>

        <div className='about__contact center'>
          {resume && (
            <a href={resume}>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default About
