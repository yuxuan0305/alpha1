import { CardContent, Typography, CardActions, Button, CardMedia, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import WebsiteLogo from '../assets/website-photo.png';
import GitHubLogo from '@mui/icons-material/GitHub';

type ProjectCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
};

function ProjectCard({ title, description, imageUrl, githubUrl }: ProjectCardProps) {

    const cardStyle = {
        width: 280,
        height: 380,
        backgroundColor: "#6B5B51",
        elevation: 0,
        borderRadius: 15,
    };

    const imageContainerStyle = {
        paddingTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    }

    const imageStyle = {
        borderRadius: 100,
        height: 200,
        width: 200,
    };

    const headerStyle = {
        paddingTop: 20,
        fontSize: 20,
        color: "#DDDAD3",
        marginLeft: 5,
    }

    const bodyStyle = {
        color: "#DDDAD3",
        fontSize: 16,
        marginLeft: 5,
        marginRight: 5,
    }

    const iconButtonStyle = {
        height: 30,
        width: 30,
        color: "#DDDAD3"
    }

    return (
        <Card style={cardStyle}>
            <div style={imageContainerStyle}>
                <CardMedia
                    component="img"
                    image={imageUrl}
                    alt={title}
                    style={imageStyle}/>
            </div>
            <header style={headerStyle}>
                {title}
            </header>
            <p style={bodyStyle}>
                {description}
            </p>
            <div>
                <IconButton style={iconButtonStyle} href={githubUrl} target="_blank">
                    <GitHubLogo/>
                </IconButton>
            </div>
      </Card>
    );
}

export default ProjectCard;
