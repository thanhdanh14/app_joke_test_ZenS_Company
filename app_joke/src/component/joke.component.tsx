import React, { useEffect, useState } from 'react'
import Header from './header.component'
import Footer from './footer.compoent'

export default function JokeApp() {
  const contents = [
    "A child asked his father, 'How were people born?' So his father said, 'Adam and Eve made babies, then their babies became adults and made babies, and so on'.The child then went to his mother, asked her the same question and she told him, 'We were monkeys then we evolved to become like we are now'.The child ran back to his father and said, 'You lied to me! His father replied, No, your mom was talking about her side of the family.'",
    "Teacher: 'Kids,what does the chicken give you?' Student: 'Meat'! Teacher: 'Very good! Now what does the pig give you?' Student: 'Bacon!' Teacher: 'Great! And what does the fat cow give you? Student: Homework!'",
    "The teacher asked Jimmy, 'Why is your cat at school today Jimmy?' Jimmy replied crying, 'Because I heard my daddy tell my mommy', 'I am going to eat that pussy once Jimmy leaves for school today!'",
    "A housewife, an accountant and a lawyer were asked 'How much is 2+2?' The housewife replies: 'Four!'. The accountant says: 'I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time.' The lawyer pulls the drapes, dims the lights and asks in a hushed voice, 'How much do you want it to be?'"
  ]
  const [contentIndex, setContexIndex] = useState(0)
  const [funnyCount, setFunnyCount] = useState(0)
  const [notFunnyCount, setNotFunnyCount] = useState(0)
  
  
  useEffect(() =>{
    setCookie('funnyCount', funnyCount, 30);
    setCookie('notFunnyCount', notFunnyCount, 30);
  },[funnyCount,notFunnyCount])

  
  const handleThisFunny: any = () => {
    setContexIndex(contentIndex + 1)
    setFunnyCount(funnyCount + 1)
  }

  const handleThisNotFunny: any = () => {
    setContexIndex(contentIndex + 1)
    setNotFunnyCount(notFunnyCount + 1)
  }

  const setCookie: any = (name: any, value : any, days: any) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

  return (
    <div className=''>
      <div className='bg-white'>
        <Header />
      </div>
      <div className='bg-[#3CB371] h-40 text-center'>
        <h1 className='font-bold text-white text-4xl pt-9'>A Joke a day keeps the doctor away</h1>
        <h4 className='font-extralight text-white pt-2'>if you joke wrong way, your teeth have to pay. (Serious)</h4>
      </div>
      <div className=' h-[450px] pl-[22%] w-[80%] text-center'>
        {contentIndex != contents.length - 1 ? (
          <h1 className='text-center pt-20 text-2xl'>{contents[contentIndex]}</h1>
        ) : (
          <h1 className='text-center pt-20 font-normal text-2xl text-green-400'>
            That's all the jokes for today! Come back another day!
          </h1>
        )}
      </div>
      <div className=' mx-[500px] my-6 border-t-2 border-gray'> </div>

      <div className='flex gap-2 justify-center'>
        <button
          onClick={handleThisFunny}
          disabled={contentIndex === contents.length - 1}
          className='bg-blue-700 h-[50px] w-[300px] text-center rounded-none text-white font-normal'
        >
          This is Funny!
        </button>
        <button
          onClick={handleThisNotFunny}
          disabled={contentIndex === contents.length - 1}
          className='bg-green-600 h-[50px] w-[300px] text-center rounded-none text-white font-normal'
        >
          This is not funny
        </button>
      </div>

      <div className=' my-6 border-t-2 border-gray'> </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
