import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface PlayerStat {
  label: string;
  value: string;
}

interface HomeHighlight {
  number: string;
  title: string;
  text: string;
}

interface FeaturedQuest {
  title: string;
  type: string;
  description: string;
  tags: string[];
  route: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  playerStats: PlayerStat[] = [
    {
      label: 'Class',
      value: 'Junior Software Developer'
    },
    {
      label: 'Main Stack',
      value: 'Angular, TypeScript, SCSS'
    },
    {
      label: 'Side Quests',
      value: 'Art, gaming, UI ideas'
    }
  ];

  highlights: HomeHighlight[] = [
    {
      number: '01',
      title: 'a junior software developer',
      text:
        'I am building practical experience in web technologies and software development, with a focus on frontend work, structured interfaces, and clean user experiences.'
    },
    {
      number: '02',
      title: 'creative and visually minded',
      text:
        'As an artist, I enjoy bringing creativity into my work and thinking about both function and appearance. I like interfaces that are useful, but also have personality.'
    },
    {
      number: '03',
      title: 'interested in games and interactive experiences',
      text:
        'My interest in games has strengthened my appreciation for digital design, usability, storytelling, and engaging user experiences.'
    }
  ];

  featuredQuests: FeaturedQuest[] = [
    {
      title: 'Bildungsplan App',
      type: 'Main Quest',
      description:
        'An Angular application for searching, filtering, and exploring EFZ education plan data through a clear and user-friendly interface.',
      tags: ['Angular', 'TypeScript', 'SCSS', 'REST API'],
      route: '/projects'
    },
    {
      title: 'Field Guide to Mounts & Critters',
      type: 'Creative Prototype',
      description:
        'A fantasy-themed Figma prototype for a collectible-tracking companion app inspired by games, collections, and interactive user flows.',
      tags: ['Figma', 'UI Design', 'Prototype'],
      route: '/creative'
    },
    {
      title: 'Retro Gaming Website',
      type: 'Side Quest',
      description:
        'A retro-inspired web project created for a Web Engineering class, built around early 2000s web design and playful visual style.',
      tags: ['HTML', 'CSS', 'Svelte', 'Vercel'],
      route: '/projects'
    }
  ];
}