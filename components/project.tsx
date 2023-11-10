import { Card, CardContent, CardActionArea, Typography, CardMedia, CardProps } from '@mui/material'

export interface ProjectCardProps extends CardProps {
    name?: string;
    img?: string;
    shortDesc?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
    const { name, img, shortDesc } = props;
    return (
        <Card>
            <CardActionArea>
                <CardMedia component={"img"} image={`../images/${img}`} width={100} />
                <CardContent>
                    <Typography variant={'h6'} component={'div'}>
                        {name}
                    </Typography>
                    <Typography variant={'body1'}>
                        {shortDesc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}