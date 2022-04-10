import { useCallback, useState } from "react";
import Button from "./Button";
import Footer from "./Footer";
import Header from './Header';

function UseCallBack() {
    const [namehome, setName] = useState('Home Page');
    const [nameAbout, setAbout] = useState('Demo Page');

    const HomeHeader =  useCallback(() => {
        setName('Home Page Update');
    }, [namehome])

    const AboutHeader = useCallback(() => {
        setAbout('About Page Update');
    }, [nameAbout])
    return ( 
        <div>
            <br />
            <Header type="home"  name={namehome} />
            <Button clickHandle={HomeHeader}>Update Home Header</Button>
            <br />
            <Header type="home"  name={nameAbout} />
            <Button clickHandle={AboutHeader}>Update Home Header</Button>
            <br />
            <Footer />
        </div>
     );
}

export default UseCallBack;