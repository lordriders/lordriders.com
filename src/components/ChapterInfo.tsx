import {
  createStyles,
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  Badge,
  rem,
  Box,
  Flex,
} from '@mantine/core';
import { IconHeart, IconBookmark, IconShare, IconHelmet, IconCalendarTime, IconMap2, IconBrandWhatsapp, IconBrandOffice, IconBuilding, IconTrafficCone } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  fill: {
    flexGrow: 1,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textShadow: "none",
  },

  noshadow: {
    textShadow: "none",
  },

  footer: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
  },
}));

export interface ChapterInfoProps {
  image: string;
  category: string;
  title: string;
  location: string;
  location_url: string;
  time: string|null;
  author: {
    name: string | null;
    contact: string | null;
    image: string;
  };
}

export function ChapterInfo({
  image,
  category,
  title,
  location,
  location_url,
  time,
  author,
}: ChapterInfoProps) {
  const { classes, theme } = useStyles();

  const regex = /\d+/g;
  return (
    <Box sx={() => ({ width: 225 })}>
      <Card withBorder padding="lg" radius="md" className={classes.card}>
        <Card.Section mb="sm">
          <Image src={image} alt={title} />
        </Card.Section>

        <Badge className={classes.noshadow}>{category}</Badge>

        {author?.name ?
          <Group mt="lg">
            <Flex gap={"xs"} align={"center"}>
              <IconHelmet />
              <Box>
                <Text fw={500} className={classes.noshadow}>{author.name}</Text>
              </Box>
            </Flex>
          </Group>
          :
          <Group mt="lg">
            <Flex gap={"xs"}  align={"center"}>
              <IconBuilding />
              <Text fw={500} className={classes.noshadow}>Sede nacional</Text>
            </Flex>
          </Group>}

        <Group mt="lg">
          <Flex gap={"xs"}  align={"center"}>
            <IconCalendarTime />
            <Text fz="xs" c="dimmed" className={classes.noshadow}>{time}</Text>
          </Flex>
        </Group>

        <Group mt="lg" className={classes.fill}>
          <Flex gap={"xs"} align={"center"}>
            <Box>
              <IconTrafficCone />
            </Box>
            <Box>
              <Text fz="xs" c="dimmed" className={classes.noshadow}>{location}</Text>
            </Box>
          </Flex>
        </Group>

        <Card.Section className={classes.footer}>
          <Group position="apart">
            <Group spacing={0}>
              <ActionIcon>
                <a href={location_url} target="_blank" rel="noreferrer">
                  <IconMap2 size="1.2rem" color={theme.colors.blue[6]} stroke={1.5} />
                </a>
              </ActionIcon>
              {author?.contact &&
                <ActionIcon>
                  <a href={`https://wa.me/${author?.contact.match(regex)?.join('')}`} target="_blank" rel="noreferrer">
                    <IconBrandWhatsapp size="1.2rem" color={theme.colors.red[6]} stroke={1.5} />
                  </a>
                </ActionIcon>
              }
            </Group>
          </Group>
        </Card.Section>
      </Card>
    </Box>
  );
}