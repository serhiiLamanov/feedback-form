import React from 'react';
import * as S from './Contact.styled';
import FeedbackForm from './FeedbackForm';
import Footer from './Footer';

export default function Contact() {
    return (
        <S.Contact>
            <S.Map/>
            <S.Ellipse/>
            <FeedbackForm/>
            <Footer/>
            <S.YellowCartoon/>
            <S.RedCartoon1/>
            <S.RedCartoon2/>
            <S.Goodie/>
        </S.Contact>
    );
}
