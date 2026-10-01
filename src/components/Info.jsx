import QRCode from 'react-qr-code'

const profile = {
  name: 'CHENG SHIUAN TSAI',
  email: 'paultsai0522@gmail.com',
  phone: '+886 987 852 216',
  website: 'https://github.com/Paultsai0522',
  // websiteLabel: 'portfolio.example.com',
  location: 'Kaohsiung Taiwan',
}

// const qrValue = [
//   'BEGIN:VCARD',
//   'VERSION:3.0',
//   `FN:${profile.name}`,
//   // `ORG:${profile.company}`,
//   // `TITLE:${profile.title}`,
//   `TEL;TYPE=CELL:${profile.phone}`,
//   `EMAIL;TYPE=INTERNET:${profile.email}`,
//   // `URL:${profile.website}`,
//   `NOTE:${profile.location}`,
//   'END:VCARD',
// ].join('\n')

const qrValue = "https://tsai-cheng-shiuan.vercel.app/"

const Info = () => {
  return (
    <div className="relative z-10 w-auto bg-transparent p-2 text-white text-center md:p-4">
      {/* <p className="font-tomorrow text-xs uppercase tracking-[0.35em] text-white/70">
        Info
      </p> */}
      <h2 className="mt-4 font-tomorrow text-xl font-semibold text-white md:text-3xl">
        {profile.name}
      </h2>
      <div className="mt-6 space-y-2 text-sm leading-7 text-white/85 md:text-base">
        <p>{profile.title}</p>
        {/* <p>{profile.company}</p> */}
        <p>{profile.email}</p>
        <p>{profile.phone}</p>
        <p>{profile.website}</p>
        <p>{profile.websiteLabel}</p>
        <p>{profile.location}</p>
      </div>

      <div className="mx-auto mt-2 w-full max-w-[140px] p-4">
        <QRCode
          bgColor="transparent"
          fgColor="#ffffff"
          value={qrValue}
          size={220}
          style={{ height: 'auto', maxWidth: '100%', width: '100%'}}
          viewBox="0 0 220 220"
        />
      </div>

      <div className="mx-auto mt-4 max-w-md text-[8px] uppercase tracking-[0.1em] text-white/60 md:text-[0.5em]">
        <p>Copyright 2026 Cheng Shiuan Tsai.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  )
}

export default Info
