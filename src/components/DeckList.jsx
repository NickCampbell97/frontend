import React from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import ListItem from '@material-ui/core/ListItem';
import ImageIcon from '@material-ui/icons/Image';
import List from '@material-ui/core/List';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
 
export default function DeckList() {
 
  return (
    <div style={{ display: 'inline-block', padding: 30 , border: '2px solid black'}}>
      <Stack spacing={2} direction="row">
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar><ImageIcon /></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos"
        secondary="Photos Icon" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar><WorkIcon /></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work"
        secondary="Work Icon" />
      </ListItem>
    </List>
    </div>
  );
}