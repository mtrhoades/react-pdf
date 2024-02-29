import React from 'react';
import { Page, Text, Document, Image, StyleSheet } from '@react-pdf/renderer';
import exampleImg from '../Images/exampleimage.png';

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35
    },
    title: {
        fontSize: 24,
        textAlign: "center"
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman"
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey"
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey"
    }
});

const PDFFile = () => {
  return (
    <Document>
        <Page style={styles.body}>
            <Text style={styles.header} fixed></Text>
            <Image style={styles.image} src={exampleImg} />
            <Text style={styles.text}>
                Ipsum adipisicing esse sit consectetur cupidatat dolor nulla ullamco eu duis. Tempor aliqua est non adipisicing velit. Esse elit proident anim anim qui proident duis. Nulla adipisicing aliqua irure cupidatat sunt esse incididunt minim duis dolor. Cupidatat laborum do proident dolor nostrud do. Deserunt et nostrud elit excepteur sint et sunt magna id pariatur nisi nulla officia.
                Ad et duis aliquip ipsum cupidatat id labore laboris. Aliquip et qui aliqua est pariatur nulla anim esse consequat tempor sint irure. Aliquip dolore qui mollit laborum commodo Lorem enim dolore enim quis irure ullamco. Consectetur do enim nostrud consequat amet eu voluptate laborum ipsum sit. Ipsum eu anim sint in culpa dolore magna ad qui adipisicing voluptate.
                Qui minim enim ad dolore excepteur. Deserunt culpa incididunt in cupidatat non ut pariatur fugiat tempor exercitation aliqua. Irure sunt labore laboris do. Laborum incididunt cupidatat velit incididunt exercitation ea culpa incididunt. Pariatur voluptate velit qui sint reprehenderit laborum labore excepteur.
            </Text>
            <Text
                style={styles.pageNumber}
                render={({pageNumber, totalPages}) => `${pageNumber} / ${totalPages}`} />
        </Page>
    </Document>
  )
}

export default PDFFile;