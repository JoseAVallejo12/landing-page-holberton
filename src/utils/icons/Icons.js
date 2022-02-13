import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CommentIcon from '@mui/icons-material/Comment';

export const IconsApp = ({ name }) => {


  const navegationIcons = {
    facebook: <FacebookIcon />,
    linkedin: <LinkedInIcon />,
    twitter: <TwitterIcon />,
    email: <EmailIcon />,
    home: <HomeIcon />,
    info: <InfoIcon />,
    contact_phone: <ContactPhoneIcon />,
    library_books: <LibraryBooksIcon />,
    work: <WorkIcon />,
    description: <DescriptionIcon />,
    precision_manufacturing: <PrecisionManufacturingIcon />,
    youtube: <YouTubeIcon />,
    comment: <CommentIcon />
  }

  return navegationIcons[name]
}
