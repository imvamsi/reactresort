import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
    <Hero>
        <Banner title="404" subtitle="It seems you are lost!!">
            <Link to = '/' className="btn-primary">
                Let's take you Home
            </Link>
        </Banner>
    </Hero>
    );
}
