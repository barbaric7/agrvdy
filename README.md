AgriVidya - A gamified learning platform

Type: Web-Based Simulation / Educational Platform

Client: Government of Karnataka

Framework: Phaser 3 (HTML5/WebGL)

AgriVidya is a web-based, gamified simulation platform developed for the Government of Karnataka to modernize agricultural education. The system provides a risk-free virtual environment where farmers and students practice sustainable agricultural techniques. By simulating real world variables such as soil health, pest management, and water conservation, the platform bridges the gap between theoretical knowledge and practical field application.

The application utilizes a lightweight, modular architecture based on the Phaser 3 engine, ensuring high performance across low-end devices while maintaining strict separation between the web presentation layer and the simulation core.

The application implements a Component-Entity-System pattern via the Phaser 3 framework. The architecture isolates the Game Loop from the DOM UI to ensure consistent frame rates and physics determinism.

```
┌───────────────────────────────────────────────────────────┐
│                   Presentation Layer (DOM)                │
│                 HTML5 / CSS3 / ES6 Modules                │
│                                                           │
│   ┌──────────────┐       ┌───────────────────────────┐    │
│   │  Landing UI  │──────▶│      Game Container       │    │
│   │ (index.html) │       │      (game.html)          │    │
│   └──────────────┘       └─────────────┬─────────────┘    │
│           │                            │                  │
│           ▼                            ▼                  │
│   ┌─────────────────┐    ┌───────────────────────────┐    │
│   │  Asset Loader   │◀───│     Phaser Engine Core    │    │
│   └─────────────────┘    └───────────────────────────┘    │
└───────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌───────────────────────────────────────────────────────────┐
│                 Simulation Logic Core (ES6)               │
│                                                           │
│   ┌───────────────────┐      ┌─────────────────────────┐  │
│   │   Scene Manager   │──────▶    Physics Engine       │  │
│   └─────────┬─────────┘      │   (Arcade Physics)      │  │
│             │                └────────────┬────────────┘  │
│   ┌─────────▼─────────┐                   │               │
│   │   State Machine   │                   │               │
│   │                   │      ┌────────────▼────────────┐  │
│   │  1. Boot          │      │    Collision System     │  │
│   │  2. Preloader     │      │                         │  │
│   │  3. MainMenu      │      │  - AABB Detection       │  │
│   │  4. Game Loop     │      │  - World Bounds         │  │
│   │  5. GameOver      │      │  - Velocity Vectoring   │  │
│   └───────────────────┘      └─────────────────────────┘  │
└───────────────────────────────────────────────────────────┘
```




No compilation is required. The source code is deployed directly. Ensure the assets/ directory maintains relative path integrity to index.html and game.html.
