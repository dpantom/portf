// /components/ProjectsPage.jsx
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    link: '/projects/project-1',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    link: '/projects/project-2',
  },
  // Add more projects here
];

function ProjectsPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom align="center">
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {project.description}
                </Typography>
                <Button variant="contained" color="primary" component={Link} to={project.link}>
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectsPage;
