import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"

function HeaderSocial() {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/cesar-perez-frontend-developer/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/DevRequena" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://twitter.com/DevRequena" target="_blank" rel="noreferrer"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocial