
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('hello')
  getHello(): { message: string } {
    return { message: 'Hello World from Fastify + NestJS 🚀' };
  }

  @Get('ping')
  ping(): { response: string } {
    return { response: 'pong 🏓' };
  }

  @Get('inspire')
  getInspiration(): { quote: string } {
    const quotes = [
      "Keep building. Even Google started with one server. 💡",
      "You don't need permission to build something great. ✨",
      "Code. Ship. Learn. Repeat. 🔁",
      "Every master was once a beginner. Start now. 🛠️",
      "Done is better than perfect. 🚀"
    ];
    const random = Math.floor(Math.random() * quotes.length);
    return { quote: quotes[random] };
  }

  @Get('funny')
  getJoke(): { joke: string } {
    const jokes = [
      "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
      "I would tell you a joke about recursion, but you'd have to understand recursion first. 🔁",
      "To understand what recursion is, you must first understand recursion. 😅",
      "There are only 10 types of people: those who understand binary and those who don't. 💻",
      "Real developers count from 0. 🤓"
    ];
    const random = Math.floor(Math.random() * jokes.length);
    return { joke: jokes[random] };
  }

  @Get('status')
  getStatus(): { status: string; uptime: string } {
    const uptime = process.uptime();
    return {
      status: '✅ Everything is up and running!',
      uptime: `${Math.floor(uptime)} seconds`,
    };
  }
}
