import React, { Component } from 'react';
import api from 'duke-convos-api'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

api.getUsers(
  // the data is returned as students
  students => {
    console.log(students);
  },
  // an error is returned
  error => {
    console.error(error);
  }
);

var names = [];

class Dinners extends React.Component {

  constructor(props) {
    super(props);
    this.state = {dinners: []};
  }

  componentDidMount() {

    api.getDinners(
      // the data is returned as students

      dinners => {
        this.setState({
          dinners: dinners
        });
      },
      // an error is returned
      error => {
        console.error(error);
      }
    );
  }


  render() {

    return (
      <div style={{marginTop: 50, marginLeft: 100, marginRight: 100}}>

        <h2>Dinners</h2>
        {this.state.dinners.map(function(dinner){
            return (
              <Paper style={{width: 600, margin: '0 auto', marginTop: 10, padding: 25}}>
                <Grid container spacing={16}>
                <Grid item>
                  <Typography>Picture</Typography>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subheading">
                        {dinner.topic}
                      </Typography>
                      <Typography color="textSecondary">{dinner.address}</Typography>
                      <Typography style={{paddingTop: 5}}>{dinner.description}</Typography>
                      <ExpansionPanel>
                        <ExpansionPanelSummary >
                          <Typography variant="heading">Expansion Panel 1</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                          </Typography>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <Typography style={{paddingTop: 5}}>{dinner.timeStamp}</Typography>
                      <Typography style={{paddingTop: 5}}>Dietary restrictions: {dinner.dietaryRestrictions}</Typography>
                      <Typography style={{paddingTop: 5}}>Catering:</Typography>
                      <Typography style={{paddingTop: 5}}>Transportation:</Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{paddingTop: 5}}># of open spots: {dinner.studentLimit}</Typography>
                      <Typography style={{paddingTop: 5}}># of application: {dinner.applications.length}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subheading">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
              </Paper>
            )

        })}
      </div>
    )
  }
}


export default Dinners;
