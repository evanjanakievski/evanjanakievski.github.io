import { Card, CardContent, CardActionArea, Typography, CardMedia, CardProps, useTheme, styled } from '@mui/material'

export interface ProjectCardProps extends CardProps {
    name?: string;
    img?: string;
    shortDesc?: string;
    link?: string;
}

const StyledCard = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.1);
  }
  `}
`;

export default function ProjectCard(props: ProjectCardProps) {
    const { name, img, shortDesc, link } = props;
    const theme = useTheme();

    return (
        <StyledCard style={{ backgroundColor: theme.palette.secondary.main}}>
            <CardActionArea href={`${link}`}>
                <CardMedia component={"img"} src={`${img}`} width={100} />
                <CardContent>
                    <Typography variant={'h6'} component={'div'}>
                        {name}
                    </Typography>
                    <Typography variant={'body1'}>
                        {shortDesc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </StyledCard>
    )
}