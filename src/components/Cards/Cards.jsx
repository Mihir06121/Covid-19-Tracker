import React from "react";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import AOS from "aos";

const Cards = ({data}) => {

    AOS.init({
        duration: 1000,
    })

    if (!data) {
        return "loading"
    }   
        
    return(
        <div align="center">
            <Grid container spacing={3} justify="space-evenly" className={cx(styles.container)}>
                <Grid item xs={8} md={5} component={Card} justify="center" className={cx(styles.confirmed, styles.card)} data-aos={"fade-up"}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant="h4" component="h1">
                            <CountUp
                                start={0}
                                end={data.confirmed}
                                duration={2.5}
                                separator=","
                            />
                            </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={8} md={5} component={Card} className={cx(styles.active, styles.card)} data-aos={"fade-up"} data-aos-delay={"200"}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom>Active</Typography>
                        <Typography variant="h4" component="h2">
                            <CountUp
                                start={0}
                                end={data.active}
                                duration={2.5}
                                separator=","
                            /></Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={8} md={5} component={Card} className={cx(styles.recovered, styles.card)} data-aos={"fade-up"} data-aos-delay={"300"}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h4" component="h2">
                            <CountUp
                                start={0}
                                end={data.recovered}
                                duration={2.5}
                                separator=","
                            />
                            </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={8} md={5} component={Card} className={cx(styles.deaths, styles.card)} data-aos={"fade-up"} data-aos-delay={"400"}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h4" component="h2">
                            <CountUp
                                start={0}
                                end={data.deceased}
                                duration={2.5}
                                separator=","
                            /></Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;