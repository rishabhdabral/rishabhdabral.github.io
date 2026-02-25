/* eslint-disable */
/**
 * site.js
 * - Renders News + Publications.
 * - Publications: search, year filter, venue filter, topic filter.
 *
 * Edit content:
 *   - NEWS below
 *   - PUBLICATIONS below
 */

const NEWS = [
 {
    "date": "Feb 2026",
    "iso": "2026-02",
    "text": "5 main papers accepted at CVPR 2026, with additional two in Findings track!"
  },
  {
    "date": "Dec 2025",
    "iso": "2025-12",
    "text": 'Organizing two conferences in CVPR2026: <a href="https://humogen.github.io/" target="_blank" rel=\"noopener noreferrer\">HuMoGen</a> and <a href="https://www.iit.it/en/web/hrii/cvpr2026-workshop" target="_blank" rel=\"noopener noreferrer\">MoMA</a>'
  },
  {
    "date": "Oct 2025",
    "iso": "2025-10",
    "text": "<a href=\"https://people.mpi-inf.mpg.de/~ksingh/\" target=\"_blank\" rel=\"noopener noreferrer\">Kunwar Maheep Singh</a> joins the group as a PhD student. Welcome!"
  },
  {
    "date": "Feb 2025",
    "iso": "2025-02",
    "text": "5 new papers accepted at CVPR 2025, including one Highlight paper!"
  },
  {
    "date": "Aug 2024",
    "iso": "2024-08",
    "text": "I started as a Research Group Leader at MPI for Informatics in August 2024."
  }
];

const PUBLICATIONS = [
  {
    "title": "Follow My Hold: Hand-Object Interaction Reconstruction through Geometric Guidance",
    "primary_url": "https://aidilayce.github.io/FollowMyHold-page/",
    "authors": "Ayce Idil Aytekin, Helge Rhodin, Rishabh Dabral, Christian Theobalt",
    "venue": "3D Vision (3DV) 2026, Vancouver",
    "year": 2026,
    "links": {
      "Project Page": "https://aidilayce.github.io/FollowMyHold-page/",
      "Arxiv": "https://arxiv.org/pdf/2508.18213",
      "Github": "https://github.com/aidilayce/FollowMyHold"
    },
    "media": {
      "type": "img",
      "src": "media/followmyhold.png"
    },
    "topics": [
      "Human Motion",
      "Hands",
      "Human-Object",
      "3D Reconstruction"
    ],
    "venue_key": "3DV"
  },
  {
    "title": "PractiLight: Practical Light Control Using Foundational Diffusion Models",
    "primary_url": "https://yoterel.github.io/PractiLight-project-page/",
    "authors": "Yotam Erel, Rishabh Dabral, Vladislav Golyanik, Amit H. Bermano, Christian Theobalt",
    "venue": "SIGGRAPH Asia Journal Track, 2025, Hong Kong",
    "year": 2025,
    "links": {
      "Project Page": "https://yoterel.github.io/PractiLight-project-page/",
      "Arxiv": "https://arxiv.org/abs/2509.01837"
    },
    "media": {
      "type": "img",
      "src": "media/practilight.gif"
    },
    "topics": [
      "Diffusion / Generative"
    ],
    "venue_key": "SIGGRAPH"
  },
  {
    "title": "Attention (as discrete-time Markov) Chains",
    "primary_url": "https://yoterel.github.io/attention_chains/",
    "authors": "Yotam Erel*, Olaf Duenkel*, Rishabh Dabral, Vladislav Golyanik, Christian Theobalt, Amit H. Bermano",
    "venue": "Neural Information Processing Systems (NeurIPS) 2025",
    "year": 2025,
    "links": {
      "Project Page": "https://yoterel.github.io/attention_chains/",
      "Arxiv": "https://arxiv.org/abs/2507.17657",
      "Github": "https://github.com/yoterel/attention_chains_code"
    },
    "media": {
      "type": "img",
      "src": "media/ac.gif"
    },
    "topics": [
      "Other"
    ],
    "venue_key": "NeurIPS"
  },
  {
    "title": "DuetGen: Music Driven Two-Person Dance Generation via Hierarchical Masked Modeling",
    "primary_url": "https://anindita127.github.io/DuetGen/",
    "authors": "Anindita Ghosh, Bing Zhou, Rishabh Dabral, Jian Wang, Vladislav Golyanik, Christian Theobalt, Philipp Slusallek, Chuan Guo",
    "venue": "ACM SIGGRAPH (Conference), 2025, Vancouver",
    "year": 2025,
    "links": {
      "Project Page": "https://anindita127.github.io/DuetGen/",
      "Arxiv": "https://arxiv.org/abs/2506.18680"
    },
    "media": {
      "type": "video",
      "src": "media/Media8.mp4"
    },
    "topics": [
      "Human Motion",
      "Diffusion / Generative",
      "Multi-modal",
      "Robotics / HCI"
    ],
    "venue_key": "SIGGRAPH"
  },
  {
    "title": "Ego4o: Egocentric Human Motion Capture and Understanding from Multi-Modal Input",
    "primary_url": "https://jianwang-mpi.github.io/ego4o/",
    "authors": "Jian Wang, Rishabh Dabral, Diogo Luvizon, Zhe Cao, Lingjie Liu, Thabo Beeler, Christian Theobalt",
    "venue": "Computer Vision and Pattern Recognition (CVPR), 2025, Nashville",
    "year": 2025,
    "links": {
      "Project Page": "https://jianwang-mpi.github.io/ego4o/",
      "Arxiv": "https://arxiv.org/abs/2504.08449"
    },
    "media": {
      "type": "img",
      "src": "media/ego40.png"
    },
    "topics": [
      "Human Motion",
      "3D Reconstruction",
      "Multi-modal"
    ],
    "venue_key": "CVPR"
  },
  {
    "title": "Retrieving Semantics from the Deep: an RAG Solution for Gesture Synthesis",
    "primary_url": "https://vcai.mpi-inf.mpg.de/projects/RAG-Gesture/",
    "authors": "Muhammad Hamza Mughal, Rishabh Dabral, Merel C.J. Scholman, Vera Demberg, Christian Theobalt",
    "venue": "Computer Vision and Pattern Recognition (CVPR), 2025, Nashville",
    "year": 2025,
    "links": {
      "Project Page": "https://vcai.mpi-inf.mpg.de/projects/RAG-Gesture/",
      "Arxiv": "https://arxiv.org/abs/2412.06786"
    },
    "media": {
      "type": "video",
      "src": "media/rag_gesture.mp4"
    },
    "topics": [
      "Gesture",
      "Diffusion / Generative"
    ],
    "venue_key": "CVPR"
  },
  {
    "title": "BimArt: A Unified Approach for the Synthesis of 3D Bimanual Interaction with Articulated Objects",
    "primary_url": "https://vcai.mpi-inf.mpg.de/projects/bimart/",
    "authors": "Wanyue Zhang, Rishabh Dabral, Vladislav Golyanik, Vasileios Choutas, Eduardo Elvarado, Thabo Beeler, Marc Habermann, Christian Theobalt",
    "venue": "Computer Vision and Pattern Recognition (CVPR), 2025, Nashville",
    "year": 2025,
    "links": {
      "Project Page": "https://vcai.mpi-inf.mpg.de/projects/bimart/",
      "Paper": "media/bimart.pdf"
    },
    "media": {
      "type": "video",
      "src": "media/bimart.mp4"
    },
    "topics": [
      "Human-Object",
      "Diffusion / Generative"
    ],
    "venue_key": "CVPR"
  },
  {
    "title": "FRAME: Floor-aligned Representation for Avatar Motion from Egocentric Video",
    "primary_url": "https://vcai.mpi-inf.mpg.de/projects/FRAME/",
    "authors": "Andrea Boscolo Camiletto, Jian Wang, Eduardo Alvarado, Rishabh Dabral, Thabo Beeler, Marc Habermann, Christian Theobalt",
    "venue": "Computer Visiona and Pattern Recognition (CVPR), 2025, Nashville (Highlight)",
    "year": 2025,
    "links": {
      "Project Page": "https://vcai.mpi-inf.mpg.de/projects/FRAME/",
      "Arxiv": "https://arxiv.org/abs/2503.23094",
      "Dataset": "https://edmond.mpg.de/dataset.xhtml?persistentId=doi:10.17617/3.XARMQA&faces-redirect=true"
    },
    "media": {
      "type": "img",
      "src": "media/frame_teaser.png"
    },
    "topics": [
      "Human Motion"
    ],
    "venue_key": "CVPR"
  },
  {
    "title": "3HANDS Dataset: Learning from Humans for Generating Naturalistic Handovers with Supernumerary Robotic Limbs",
    "primary_url": "https://hci.cs.uni-saarland.de/projects/3hands/",
    "authors": "Artin Saberpour Abadian, Yi-Chi Liao, Ata Otaran, Rishabh Dabral, Marie Muehlhaus, Christian Theobalt, Martin Schmitz, Juergen Steimle",
    "venue": "Human Factors in Computing Systems (CHI), 2025, Yokohama",
    "year": 2025,
    "links": {
      "Project Page": "https://hci.cs.uni-saarland.de/projects/3hands/",
      "Paper": "https://hci.cs.uni-saarland.de/wp-content/uploads/projects/human_robot_interaction/3hands/saberpour_chi25_3hands.pdf",
      "Dataset": "https://hci.cs.uni-saarland.de/projects/3hands/"
    },
    "media": {
      "type": "img",
      "src": "media/chi.png"
    },
    "topics": [
      "Hands",
      "Datasets",
      "Robotics / HCI"
    ],
    "venue_key": "CHI"
  },
  {
    "title": "Betsu-Betsu: Separable 3D Reconstruction of Two Interacting Objects from Multiple Views",
    "primary_url": "https://vcai.mpi-inf.mpg.de/projects/separable-recon/",
    "authors": "Suhas Gopal, Rishabh Dabral, Vladislav Golyanik, Christian Theobalt",
    "venue": "3D Vision (3DV) 2025, Singapore",
    "year": 2025,
    "links": {
      "Project Page": "https://vcai.mpi-inf.mpg.de/projects/separable-recon/",
      "Arxiv": "https://arxiv.org/pdf/2502.13968"
    },
    "media": {
      "type": "img",
      "src": "media/betsu_betsu_teaser.png"
    },
    "topics": [
      "3D Reconstruction",
      "Multi-view"
    ],
    "venue_key": "3DV"
  },
  {
    "title": "PocoLoco: A Point Cloud Diffusion Model of Human Shape in Loose Clothing",
    "primary_url": "https://vcai.mpi-inf.mpg.de/projects/pocoloco/",
    "authors": "Siddharth Seth, Rishabh Dabral, Diogo Luvizon, Marc Habermann, Ming-Hsuan Yang, Christian Theobalt, Adam Kortylewski",
    "venue": "Winter Conference on Applications of Computer Vision (WACV) 2025, Hawaii",
    "year": 2025,
    "links": {
      "Project Page": "https://vcai.mpi-inf.mpg.de/projects/pocoloco/",
      "Arxiv": "https://arxiv.org/pdf/2411.04249"
    },
    "media": {
      "type": "img",
      "src": "media/pocoloco.png"
    },
    "topics": [
      "Diffusion / Generative"
    ],
    "venue_key": "WACV"
  },
  {
    "title": "MetaCap: Meta-learning Priors from Multi-View Imagery for Sparse-view Human Performance Capture and Rendering",
    "primary_url": "https://vcai.mpi-inf.mpg.de/projects/MetaCap/",
    "authors": "Guoxing Sun, Rishabh Dabral, Pascal Fua, Christian Theobalt, Marc Habermann",
    "venue": "European Conference on Computer Vision (ECCV), 2024, Milan",
    "year": 2024,
    "links": {
      "Project Page": "https://vcai.mpi-inf.mpg.de/projects/MetaCap/",
      "Arxiv": "https://arxiv.org/pdf/2403.18820.pdf"
    },
    "media": {
      "type": "img",
      "src": "media/metacap.png"
    },
    "topics": [
      "3D Reconstruction",
      "Neural Rendering",
      "Multi-view"
    ],
    "venue_key": "ECCV"
  },
  {
    "title": "ReMoS: Reactive 3D Motion Synthesis for Two-Person Interactions",
    "primary_url": "https://vcai.mpi-inf.mpg.de/projects/remos/",
    "authors": "Anindita Ghosh, Rishabh Dabral, Vladislav Golyanik, Christian Theobalt, Philipp Slusallek",
    "venue": "European Conference on Computer Vision (ECCV), 2024, Milan",
    "year": 2024,
    "links": {
      "Project Page": "https://vcai.mpi-inf.mpg.de/projects/remos/",
      "Arxiv": "https://arxiv.org/pdf/2311.17057.pdf"
    },
    "media": {
      "type": "img",
      "src": "media/remos.gif"
    },
    "topics": [
      "Human Motion",
      "Human-Object",
      "Diffusion / Generative"
    ],
    "venue_key": "ECCV"
  },
  {
    "title": "ConvoFusion: Multi-Modal Conversational Diffusion for Co-Speech Gesture Synthesis",
    "primary_url": "https://vcai.mpi-inf.mpg.de/projects/ConvoFusion/",
    "authors": "Muhammad Hamza Mughal, Rishabh Dabral, Ikhsanul Habibie, Lucia Donatelli, Marc Habermann, Christian Theobalt",
    "venue": "Computer Vision and Pattern Recognition (CVPR), 2024, Seattle",
    "year": 2024,
    "links": {
      "Project Page": "https://vcai.mpi-inf.mpg.de/projects/ConvoFusion/",
      "Arxiv": "https://arxiv.org/abs/2403.17936",
      "Code": "https://github.com/m-hamza-mughal/convofusion"
    },
    "media": {
      "type": "video",
      "src": "media/convofusion.mp4"
    },
    "topics": [
      "Gesture",
      "Diffusion / Generative",
      "Multi-modal"
    ],
    "venue_key": "CVPR"
  },
  {
    "title": "ROAM: Robust and Object-aware Motion Generation using Neural Pose Descriptors",
    "primary_url": "https://vcai.mpi-inf.mpg.de/projects/ROAM/",
    "authors": "Wanyue Zhang, Rishabh Dabral, Thomas Leimkuehler, Vladislav Golyanik, Marc Habermann, Christian Theobalt",
    "venue": "International Conference on 3D Vision (3DV), 2024, Davos",
    "year": 2024,
    "links": {
      "Project Page": "http://vcai.mpi-inf.mpg.de/projects/ROAM/",
      "PDF": "media/roam_compressed.pdf",
      "Video": "https://vcai.mpi-inf.mpg.de/projects/ROAM/videos/main_video_website.mp4"
    },
    "media": {
      "type": "img",
      "src": "media/motion_result.gif"
    },
    "topics": [
      "Human Motion",
      "Human-Object",
      "3D Reconstruction",
      "Diffusion / Generative"
    ],
    "venue_key": "3DV"
  },
  {
    "title": "3D-QAE: Fully Quantum Auto-Encoding of 3D Point Clouds.",
    "primary_url": "https://4dqv.mpi-inf.mpg.de/QAE3D/",
    "authors": "Lakshika Rathi, Edith Tretschk, Christian Theobalt, Rishabh Dabral, Vladislav Golyanik",
    "venue": "British Machine Vision Conference (BMVC), 2023, Aberdeen",
    "year": 2023,
    "links": {
      "Project Page": "https://4dqv.mpi-inf.mpg.de/QAE3D/",
      "PDF": "https://arxiv.org/pdf/2311.05604.pdf"
    },
    "media": {
      "type": "img",
      "src": "media/3DQAE_v3.png"
    },
    "topics": [
      "Robotics / HCI",
      "Quantum"
    ],
    "venue_key": "BMVC"
  },
  {
    "title": "WRLKIT: Computational Design of Personalized Wearable Robotic Limbs",
    "primary_url": "https://hci.cs.uni-saarland.de/projects/wrlkit/",
    "authors": "Artin Saberpour Abadian, Ata Otaran, Martin Schmitz, Marie Muehlhaus, Rishabh Dabral, Diogo Luvizon, Azumi Maekawa, Masahiko Inami, Christian Theobalt, and Jürgen Steimle",
    "venue": "ACM Symposium on User Interface Software and Technology (UIST), 2023, San Francisco",
    "year": 2023,
    "links": {
      "Project Page": "https://hci.cs.uni-saarland.de/projects/wrlkit/",
      "PDF": "https://hci.cs.uni-saarland.de/wp-content/uploads/projects/human_robot_interaction/wrlkit/saberpour_uist23_wrlkit.pdf",
      "Video": "https://hci.cs.uni-saarland.de/wp-content/uploads/projects/human_robot_interaction/wrlkit/WRLKit.mp4"
    },
    "media": {
      "type": "img",
      "src": "media/wrlkit.png"
    },
    "topics": [
      "Robotics / HCI"
    ],
    "venue_key": "UIST"
  },
  {
    "title": "MoFusion: A Framework for Denoising-Diffusion-based Motion Synthesis",
    "primary_url": "https://vcai.mpi-inf.mpg.de/projects/MoFusion/",
    "authors": "Rishabh Dabral, Muhammad Hamza Mughal, Vladislav Golyanik, Christian Theobalt",
    "venue": "Computer Vision and Pattern Recognition (CVPR), 2023, Vancouver (Highlight)",
    "year": 2023,
    "links": {
      "Project Page": "http://vcai.mpi-inf.mpg.de/projects/MoFusion/",
      "Youtube": "https://youtu.be/Woo73Gy2jUg?si=XV4Ihyg4VvkZErE1"
    },
    "media": {
      "type": "img",
      "src": "media/mofusion_teaser_website.png"
    },
    "topics": [
      "Human Motion",
      "Diffusion / Generative"
    ],
    "venue_key": "CVPR"
  },
  {
    "title": "IMOS: Intent-Driven Full-Body Motion Synthesis for Human-Object Interactions",
    "primary_url": "https://vcai.mpi-inf.mpg.de/projects/IMoS/",
    "authors": "Anindita Ghosh, Rishabh Dabral, Vladislav Golyanik, Christian Theobalt, Philipp Slusallek",
    "venue": "Eurographics 2023, Saarbrucken",
    "year": 2023,
    "links": {
      "Project Page": "https://vcai.mpi-inf.mpg.de/projects/IMoS/",
      "Youtube": "https://youtu.be/78TuOwJnFt8?si=M1fkCHRSTDBwjYlf"
    },
    "media": {
      "type": "img",
      "src": "media/imos_gif.gif"
    },
    "topics": [
      "Human Motion",
      "Human-Object",
      "Diffusion / Generative"
    ],
    "venue_key": "Eurographics"
  },
  {
    "title": "State of the Art in Dense Monocular Non-Rigid 3D Reconstruction",
    "primary_url": "https://4dqv.mpi-inf.mpg.de/star_monocular_nr3d/",
    "authors": "Edith Tretschk*, Navami Kairanda*, Mallikarjun B R, Rishabh Dabral, Adam Kortylewski, Bernhard Egger, Marc Habermann, Pascal Fua, Christian Theobalt, Vladislav Golyanik",
    "venue": "Eurographics (STAR) 2023, Saarbrucken",
    "year": 2023,
    "links": {
      "Project Page": "https://4dqv.mpi-inf.mpg.de/star_monocular_nr3d/",
      "Youtube": "https://youtu.be/y-o1jDGEIjE?si=NvH1128EXSDzJW6M"
    },
    "media": {
      "type": "img",
      "src": "media/star_thumb.png"
    },
    "topics": [
      "3D Reconstruction",
      "Multi-view"
    ],
    "venue_key": "STAR"
  },
  {
    "title": "Gravity-Aware 3D Human-Object Reconstruction",
    "primary_url": "https://4dqv.mpi-inf.mpg.de/GraviCap/",
    "authors": "Rishabh Dabral, Soshi Shimada, Arjun Jain, Christian Theobalt, Vladislav Golyanik",
    "venue": "International Conference on Computer Vision (ICCV), 2021, Montreal",
    "year": 2021,
    "links": {
      "Project Page": "https://4dqv.mpi-inf.mpg.de/GraviCap/",
      "Youtube": "https://youtu.be/UsCOBNSBkqc?si=v9B_E95zNGBuH8sW",
      "Code": "https://github.com/rishabhdabral/gravicap/tree/main"
    },
    "media": {
      "type": "img",
      "src": "media/gravicap.png"
    },
    "topics": [
      "Human-Object",
      "3D Reconstruction"
    ],
    "venue_key": "ICCV"
  },
  {
    "title": "Cross-Modal Learning for Audio-Visual Video Parsing",
    "primary_url": "https://www.cse.iitb.ac.in/~rdabral/#",
    "authors": "Jatin Lamba, Jayaprakash Akula, Abhishek, Rishabh Dabral, Preethi Jyothi, Ganesh Ramakrishnan",
    "venue": "InterSpeech 2021, Brno",
    "year": 2021,
    "links": {},
    "media": {
      "type": "img",
      "src": "media/interspeech_fig.png"
    },
    "topics": [
      "Gesture",
      "Multi-modal"
    ],
    "venue_key": "Interspeech"
  },
  {
    "title": "Rudder: A Cross Lingual Video and Text Retrieval Dataset",
    "primary_url": "https://www.cse.iitb.ac.in/~rdabral/#",
    "authors": "Jayaprakash Akula, Abhishek, Rishabh Dabral, Ganesh Ramakrishnan, Preethi Jyothi",
    "venue": "International Conference on Multimodal Interaction (ICMI), 2021, Montreal",
    "year": 2021,
    "links": {},
    "media": {
      "type": "img",
      "src": "media/icmi_fig.png"
    },
    "topics": [
      "Human-Object",
      "Datasets"
    ],
    "venue_key": "ICMI"
  },
  {
    "title": "Exploration of Spatial and Temporal Alternatives for HOI in Videos",
    "primary_url": "https://www.cse.iitb.ac.in/~rdabral/#",
    "authors": "Rishabh Dabral, Srijon Sarkar, Sai Praneeth Reddy, Ganesh Ramakrishnan",
    "venue": "Winter Conference on Application of Computer Vision (WACV), 2021",
    "year": 2021,
    "links": {},
    "media": {
      "type": "img",
      "src": "media/wacv_fig.png"
    },
    "topics": [
      "Human-Object"
    ],
    "venue_key": "WACV"
  },
  {
    "title": "LIGHTEN: Learning Interactions using Graphs and Hierarchical TEmporal Networks for HOI in Videos",
    "primary_url": "https://www.cse.iitb.ac.in/~rdabral/#",
    "authors": "Sai Praneeth Reddy, Rishabh Dabral, Ganesh Ramakrishnan",
    "venue": "ACM Multimedia 2020, Seattle (Oral)",
    "year": 2020,
    "links": {
      "PDF": "https://www.cse.iitb.ac.in/~rdabral/docs/acm_lighten2.pdf",
      "Code": "https://github.com/praneeth11009/LIGHTEN-Learning-Interactions-with-Graphs-and-Hierarchical-TEmporal-Networks-for-HOI/"
    },
    "media": {
      "type": "img",
      "src": "media/teaser_mm.PNG"
    },
    "topics": [
      "Human-Object",
      "Robotics / HCI"
    ],
    "venue_key": "ACM Multimedia"
  },
  {
    "title": "Multi-Person 3D Human Pose Estimation from Monocular Images",
    "primary_url": "https://www.cse.iitb.ac.in/~rdabral/#",
    "authors": "Rishabh Dabral, Nitesh Bharadwaj, Rahul Mitra, Abhishek Sharma, Ganesh Ramakrishnan, Arjun Jain",
    "venue": "Interanational Conference on 3D Vision (3DV), 2019, Quebec City",
    "year": 2019,
    "links": {
      "PDF": "https://www.cse.iitb.ac.in/~rdabral/docs/multi_person_3dv.pdf",
      "Youtube": "https://youtu.be/gZfa4oxQtdg"
    },
    "media": {
      "type": "img",
      "src": "media/3DV_19.jpg"
    },
    "topics": [
      "3D Reconstruction",
      "Multi-view"
    ],
    "venue_key": "3DV"
  },
  {
    "title": "Progression Modelling for Online and Early Gesture Detection",
    "primary_url": "https://www.cse.iitb.ac.in/~rdabral/#",
    "authors": "Vikram Gupta, Sai Kumar Dwivedi, Rishabh Dabral, Arjun Jain",
    "venue": "Interanational Conference on 3D Vision (3DV), 2019, Quebec City (Oral)",
    "year": 2019,
    "links": {
      "arXiv Preprint": "https://arxiv.org/pdf/1909.06672.pdf",
      "Dataset": "https://github.com/vguptai/Neo-Nvidia-Annotations"
    },
    "media": {
      "type": "img",
      "src": "media/3DV_19_GPM.JPG"
    },
    "topics": [
      "Gesture"
    ],
    "venue_key": "3DV"
  },
  {
    "title": "Learning 3D Human Pose from Structure and Motion",
    "primary_url": "http://www.cse.iitb.ac.in/~rdabral/3DPose",
    "authors": "Rishabh Dabral, Anurag Mundhada, Uday Kusupati, Safeer Afaque, Abhishek Sharma, Arjun Jain",
    "venue": "European Conference on Computer Vision (ECCV), 2018, Munich",
    "year": 2018,
    "links": {
      "Project Page": "http://www.cse.iitb.ac.in/~rdabral/3DPose",
      "arXiv Preprint": "https://arxiv.org/abs/1711.09250v2",
      "Youtube": "https://youtu.be/FILdj0LuvjU"
    },
    "media": {
      "type": "img",
      "src": "media/ECCV_18.jpg"
    },
    "topics": [
      "Human Motion",
      "3D Reconstruction"
    ],
    "venue_key": "ECCV"
  }
];

const $ = (sel, el=document) => el.querySelector(sel);
const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));

function escapeHtml(str){
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function escapeAttr(str){ return escapeHtml(str).replaceAll("`","&#096;"); }

function uniq(arr){ return Array.from(new Set(arr)); }

function renderNews(){
  const ul = $("#news-list");
  if (!ul) return;
  ul.innerHTML = "";
  

  const sorted = [...NEWS].sort((a,b) => String(b.iso||"").localeCompare(String(a.iso||"")));
  for (const item of sorted) {
    const li = document.createElement("li");
    li.className = "news-item";
    li.innerHTML = `
      <div class="news-date">${escapeHtml(item.date || "")}</div>
      <div>${item.text || ""}</div>
    `;
    ul.appendChild(li);
  }

  if (!sorted.length) {
    const li = document.createElement("li");
    li.className = "news-item";
    li.innerHTML = `<div class="news-date"></div><div class="subtle">No news yet.</div>`;
    ul.appendChild(li);
  }
 
}

function yearsFromPubs(pubs){
  return uniq(pubs.map(p => p.year).filter(Boolean)).sort((a,b)=>b-a);
}

function venuesFromPubs(pubs){
  return uniq(pubs.map(p => p.venue_key).filter(Boolean)).sort((a,b)=>a.localeCompare(b));
}

function topicsFromPubs(pubs){
  const all = [];
  for (const p of pubs) {
    for (const t of (p.topics || [])) all.push(t);
  }
  return uniq(all).sort((a,b)=>a.localeCompare(b));
}

function populateSelect(sel, items, allLabel){
  if (!sel) return;
  sel.innerHTML = `<option value="all">${escapeHtml(allLabel)}</option>` + items.map(x => `<option value="${escapeAttr(x)}">${escapeHtml(String(x))}</option>`).join("");
}

function renderTopicCheckboxes(){
  const root = $("#topic-list");
  if (!root) return;

  const topics = topicsFromPubs(PUBLICATIONS);
  root.innerHTML = "";

  for (const t of topics) {
    const id = `topic-${t.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`;
    const wrap = document.createElement("label");
    wrap.className = "topic-item";
    wrap.innerHTML = `
      <input type="checkbox" value="${escapeAttr(t)}" id="${escapeAttr(id)}" />
      <span>${escapeHtml(t)}</span>
    `;
    root.appendChild(wrap);
  }
}

function getSelectedTopics(){
  return $$("#topic-list input[type=checkbox]:checked").map(i => i.value);
}

function matchesQuery(pub, q){
  if (!q) return true;
  const blob = `${pub.title||""} ${pub.authors||""} ${pub.venue||""} ${pub.year||""} ${(pub.topics||[]).join(" ")}`.toLowerCase();
  return blob.includes(q.toLowerCase());
}

function matchesTopics(pub, selected){
  if (!selected.length) return true;
  const set = new Set((pub.topics || []).map(String));
  return selected.some(t => set.has(String(t)));
}

function renderPublications(){
  const root = $("#pub-list");
  if (!root) return;

  const q = ($("#pub-search")?.value || "").trim();
  const yearSel = $("#pub-year")?.value || "all";
  const venueSel = $("#pub-venue")?.value || "all";
  const selectedTopics = getSelectedTopics();

  let pubs = [...PUBLICATIONS];

  if (yearSel !== "all") {
    const y = Number(yearSel);
    pubs = pubs.filter(p => p.year === y);
  }
  if (venueSel !== "all") {
    pubs = pubs.filter(p => String(p.venue_key || "") === venueSel);
  }

  pubs = pubs.filter(p => matchesTopics(p, selectedTopics));
  pubs = pubs.filter(p => matchesQuery(p, q));

  root.innerHTML = "";
  for (const pub of pubs) {
    const links = pub.links || {};
    const linkHtml = Object.entries(links)
      .filter(([,url]) => !!url)
      .map(([label, url]) => `<a href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`)
      .join("");

    let mediaHtml = "";
    if (pub.media?.type === "video") {
      mediaHtml = `<video src="${escapeAttr(pub.media.src)}" muted loop playsinline preload="metadata"></video>`;
    } else if (pub.media?.type === "img") {
      mediaHtml = `<img src="${escapeAttr(pub.media.src)}" alt="" loading="lazy" />`;
    } else {
      mediaHtml = `<img src="media/paper_icon.png" alt="" loading="lazy" />`;
    }

    const article = document.createElement("article");
    article.className = "pub-card";
    article.dataset.year = String(pub.year || "");
    article.dataset.venue = String(pub.venue_key || "");
    article.dataset.topics = (pub.topics || []).join(",");

    // Title link falls back to first link if missing
    const titleUrl = pub.primary_url || Object.values(links)[0] || "#";

    article.innerHTML = `
      <div class="pub-thumb">${mediaHtml}</div>
      <div class="pub-body">
        <div>
          <h3 class="pub-title clamp-2" title="${escapeAttr(pub.title || "")}">
            <a href="${escapeAttr(titleUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(pub.title || "")}</a>
          </h3>
          <p class="pub-authors clamp-1" title="${escapeAttr(pub.authors || "")}">${escapeHtml(pub.authors || "")}</p>
          <p class="pub-venue clamp-1"><em>${escapeHtml(pub.venue || "")}</em></p>
        </div>
        <div class="pub-links" aria-label="Links">${linkHtml}</div>
      </div>
    `;
    root.appendChild(article);
  }

  const count = $("#pub-count");
  if (count) {
    const parts = [];
    parts.push(`${pubs.length} result${pubs.length===1?"":"s"}`);
    if (yearSel !== "all") parts.push(`year: ${yearSel}`);
    if (venueSel !== "all") parts.push(`venue: ${venueSel}`);
    if (selectedTopics.length) parts.push(`topics: ${selectedTopics.join(", ")}`);
    if (q) parts.push(`search: “${q}”`);
    count.textContent = parts.join(" · ");
  }

  setupVideoAutoplay();
}

let videoObserver = null;
function setupVideoAutoplay(){
  // Avoid creating multiple observers
  if (videoObserver) {
    // refresh list: unobserve then observe again
    try {
      videoObserver.disconnect();
    } catch (_) {}
  }

  const videos = $$("#pub-list video");
  if (!videos.length) return;

  videoObserver = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const v = e.target;
      if (!(v instanceof HTMLVideoElement)) continue;
      if (e.isIntersecting) {
        // best effort
        v.play().catch(()=>{});
      } else {
        v.pause();
      }
    }
  }, { threshold: 0.35 });

  for (const v of videos) {
    videoObserver.observe(v);
  }
}

function clearFilters(){
  const q = $("#pub-search");
  const y = $("#pub-year");
  const v = $("#pub-venue");
  if (q) q.value = "";
  if (y) y.value = "all";
  if (v) v.value = "all";
  for (const cb of $$("#topic-list input[type=checkbox]")) cb.checked = false;
  renderPublications();
}

function initPublications(){
  populateSelect($("#pub-year"), yearsFromPubs(PUBLICATIONS), "All years");
  populateSelect($("#pub-venue"), venuesFromPubs(PUBLICATIONS), "All venues");
  renderTopicCheckboxes();
  renderPublications();

  $("#pub-search")?.addEventListener("input", renderPublications);
  $("#pub-year")?.addEventListener("change", renderPublications);
  $("#pub-venue")?.addEventListener("change", renderPublications);
  $("#topic-list")?.addEventListener("change", renderPublications);
  $("#pub-clear")?.addEventListener("click", clearFilters);
}

function initHeader(){
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const open = () => {
    nav.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    if (expanded) close();
    else open();
  });

  nav.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.tagName === "A") close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  window.addEventListener("resize", () => {
    // Keep things sane when switching between mobile and desktop widths
    if (window.innerWidth > 720) close();
  });
}

function init(){
  initHeader();
  renderNews();
  initPublications();
}

document.addEventListener("DOMContentLoaded", init);
