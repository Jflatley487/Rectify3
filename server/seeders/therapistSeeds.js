// Import required dependencies
const mongoose = require('mongoose');
const Therapist = require('../models/Therapist');
const connectDB = require('../config/connection');

// Connect to the MongoDB database
connectDB();

// An array containing 6ea therapists data
const therapistData = [
  {
    name: 'Dr. Samantha Roberts',
    specialty: 'Cognitive Behavioral Therapy (CBT)',
    location: 'New York City, NY',
    bio: 'As an experienced Cognitive Behavioral Therapist, I am dedicated to helping ex-convicts overcome the challenges of reintegrating into society. My passion lies in empowering individuals to break free from the cycle of recidivism by fostering positive mindset shifts and teaching effective coping strategies. With a compassionate and non-judgmental approach, I am committed to guiding my clients toward personal growth, enabling them to lead fulfilling lives and contribute positively to their communities.',
    comments: {
      commentBody: "I had a great experience with Dr. Roberts!",
      commenter: "Tester"
    }
  },
  {
    name: 'David Chang, LMFT',
    specialty: 'Trauma Therapy',
    location: 'Los Angeles, CA',
    bio: 'As a Licensed Marriage and Family Therapist, I understand the unique dynamics that ex-convicts face when reconnecting with their families. My therapeutic approach focuses on restoring and strengthening family bonds, fostering open communication, and promoting healing after incarceration. By addressing the interplay of family relationships, I aim to create a supportive environment that enables my clients to navigate challenges and embrace a new chapter in their lives',
  },
  {
    name: 'Jonathan Ramirez, LCSW',
    specialty: 'Reintegration Counseling',
    location: 'Miami, FL',
    bio: 'As a Licensed Clinical Social Worker, I am passionate about guiding ex-convicts on their path to successful reintegration into society. My person-centered approach emphasizes empathy, active listening, and collaboration. By addressing the challenges of re-entry, I assist clients in accessing vital resources, finding employment opportunities, and rebuilding their lives with dignity and purpose. Together, we will navigate the journey of transformation, turning challenges into opportunities for growth.',
  },
  {
    name: 'Linda Johnson, LPC',
    specialty: 'Substance Abuse Counseling',
    location: 'Houston, TX',
    bio: 'As a Licensed Professional Counselor specializing in substance abuse, I am devoted to supporting ex-convicts in their journey to overcome addiction and maintain sobriety. Through evidence-based therapies and personalized treatment plans, I work closely with my clients to address the root causes of substance abuse, helping them develop coping skills and relapse prevention strategies. My ultimate goal is to see individuals thrive in their recovery and lead healthy, fulfilling lives.',
  },
  {

    name: 'Dr. Emily Mitchell, PsyD',
    specialty: 'Trauma-Informed Therapy',
    location: 'Chicago, IL',
    bio: 'As a seasoned clinical psychologist with expertise in trauma-informed therapy, I am deeply committed to guiding ex-convicts through their healing journey. I recognize the impact of past experiences and provide a safe space for clients to process their emotions and develop resilience. With a strengths-based approach, I strive to empower individuals to overcome past traumas, break free from negative cycles, and build a brighter future filled with hope and possibility.',

  },
  {
    name: 'Dr. Maria Sanchez, PhD',
    specialty: 'Anger Management',
    location: 'Denver, CO',
    bio: 'As a Doctor of Psychology specializing in anger management, I understand the emotional complexities that ex-convicts often face during their transition. Through evidence-based techniques and customized anger management strategies, I help my clients gain control over their emotions and responses. By fostering emotional intelligence and conflict resolution skills, I aim to empower individuals to break the cycle of aggression, channel their energy positively, and create harmonious relationships in all aspects of their lives.',
  },
];

// Function to seed the database with therapist data
const seedTherapists = async () => {
  try {
    await dbConnection;
    await Therapist.deleteMany();
    await Therapist.create(therapistData);
    console.log('Seed data inserted successfully');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Call the seedTherapist function to start seeding process
seedTherapists();
