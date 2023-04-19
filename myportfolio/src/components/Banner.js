import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

const Banner = () => {

    const [loopNumber, setLoopNumber] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [text, setText] = useState("")

    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]
    const period = 2000

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick()
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = ()=> {
        let i = loopNumber * toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting){
            setDelta(prevData => prevData/2 )
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(!isDeleting && updatedText === ""){
            setIsDeleting(false)
            setLoopNumber(loopNumber + 1)
            setDelta(500)
        }
    }

  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Porfolio</span>
                    <h1>{`Hi I'm Carl `}<span className="wrap">{text}</span></h1>
                    <p>A front-end developer based in United Kingdom with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and always looking for new things to learn.</p>
                    <button onClick={() => console.log("connect")}>Let's Connect <ArrowRightCircle/></button>
                </Col>

                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner
