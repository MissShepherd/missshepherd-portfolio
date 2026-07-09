import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface HomeStat {
  label: string;
  value: string;
}

interface CreativeInfluence {
  title: string;
  text: string;
  icon: string;
}

interface FeaturedProject {
  label: string;
  title: string;
  objective: string;
  tools: string[];
  reward: string;
  route: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  stats: HomeStat[] = [
    {
      label: 'Current Build',
      value: 'Junior Software Developer'
    },
    {
      label: 'Main Tools',
      value: 'Angular, TypeScript, SCSS'
    },
    {
      label: 'Creative Buffs',
      value: 'Drawing, gaming, music, UI design'
    }
  ];

  influences: CreativeInfluence[] = [
    {
      icon: '♪',
      title: 'Music',
      text: 'Rhythm, mood, and bold visual energy influence how I think about layout and flow.'
    },
    {
      icon: '✦',
      title: 'Drawing',
      text: 'Sketching helps me explore shapes, characters, composition, and visual storytelling.'
    },
    {
      icon: '▶',
      title: 'Gaming',
      text: 'Games made me appreciate readable systems, feedback, navigation, and interactive design.'
    },
    {
      icon: '★',
      title: 'Roleplay & Animation',
      text: 'Characters, stories, cartoons, and anime inspire playful details and expressive interfaces.'
    }
  ];

  featuredProjects: FeaturedProject[] = [
    {
      label: 'Main Quest',
      title: 'Bildungsplan App',
      objective:
        'Build a searchable Angular frontend for EFZ education plan data.',
      tools: ['Angular', 'TypeScript', 'SCSS', 'REST API'],
      reward:
        'Practical frontend experience, clearer data structure, filters, search, and detail views.',
      route: '/projects'
    },
    {
      label: 'Side Quest',
      title: 'Field Guide to Mounts & Critters',
      objective:
        'Design a fantasy-themed collectible tracker prototype inspired by game collections.',
      tools: ['Figma', 'UI Design', 'Prototype'],
      reward:
        'Stronger user flow, visual design practice, and a polished themed interface.',
      route: '/creative'
    },
    {
      label: 'Archive Quest',
      title: 'Retro Gaming Website',
      objective:
        'Create a retro-inspired web project based on early 2000s gaming website aesthetics.',
      tools: ['HTML', 'CSS', 'Svelte', 'Vercel'],
      reward:
        'Creative web design practice with nostalgic visuals and deployment experience.',
      route: '/projects'
    }
  ];
}