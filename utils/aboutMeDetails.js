import { images } from '../public/images/aboutMe'

const { hobbies, work, details, story } = images

export const aboutMeObj = {
  story: {
    name: 'My Story',
    icon: story,
    getDetails: () => {
      return (
        <p>
          My love for computers goes back further than I can remember. I've
          always been drawn to anything with buttons and a screen. I've always
          had a passion for Software Development, and after I graduated from
          high school, I took part in a Web Development course. <br />
          <br />
          This was in 2006, Myspace was beginning to fade, Facebook had just
          started taking off, Youtube had just been created and the world of
          Software Development wasn't the industry it is today. <br />
          <br />
          The general consensus at the time was that Software Development was a
          risky industry to pursue, and instead it was advised to get a job with
          better security and steady income. As a result, I put my focus into
          being an electrician, which in Australia is considered respectable.
          <br />
          <br />
          Time has passed, times have changed and I wish to finish what I
          started. <br />
          <br />I am friendly, hard working, self motivated and eager to learn.
          My experience thus far will show that I can work with all levels of
          staff, in high pressured environments and can provide leadership as
          needed. I'm coming from a technical background, which will act as a
          catalyst for me to grow in this industry.
        </p>
      )
    },
  },
  hobbies: {
    name: 'Hobbies',
    icon: hobbies,
    getDetails: () => {
      return (
        <p>
          <b>Music: </b>Electronic, RNB, 70's Rock, 90's Rock
          <br />
          <br />
          <b>Computers: </b>I built my first PC at the age of 15, and computers
          have been a been a staple in life since
          <br />
          <br />
          <b>Food: </b>I enjoy going to restaurants and appreciate different
          cuisines and styles of food.
          <br />
          <br />
          <b>Travel: </b>Since moving to London I have travelled to just about
          every country in Western Europe and have loved every second. I
          appreciate different cultures, architecture and food.
          <br />
          <br />
          <b>Gym: </b>I maintain a healthy body and mind. Giving myself goals in
          the gym gives me an extra reason to eat well and in turn keeps the
          mind healthy.
          <br />
          <br />
          <b>DIY: </b>I was previously an electrician, and have always enjoyed
          working with my hands. I enjoy all types of 'do it yourself'
          activities whether that is electrical, painting, carpentry or
          plumbing. If I dont know how to do something I enjoy finding out how.
          <br />
          <br />
        </p>
      )
    },
  },
  work: {
    name: 'Work',
    icon: work,
    getDetails: () => {
      return (
        <p>
          I have put the majority of my focus towards Front-End development. My
          studies have been largely based on JavaScript and React, and when
          creating projects the goal in mind is to create a fast, easy to use
          experience.
          <br />
          <br />
          My work interests are broad, however I am still at the beggining
          stages of my career change and would be better suited towards
          front-end work. My goal is to start off with front-end development
          roles, then progressively get exposure and learn about the back-end
          side of the industry, to then eventually become a full stack
          developer.
          <br />
          <br />I strongly believe in an experience that is fast and easy to
          use. I believe the user experience plays a very large part in what
          services they choose to use.
        </p>
      )
    },
  },
}

export const aboutMeArr = Object.keys(aboutMeObj).map((item) => item)

//REMOVED FROM OBJECT
// details: {
//   name: 'Details',
//   icon: details,
//   getDetails: () => {
//     return <p>DETAILS MAIN DETAILS</p>
//   },
// },
