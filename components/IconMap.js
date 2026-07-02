import {
  Car, Plane, Map, Star, Briefcase, Train, Bus, Activity, Moon, Zap,
  GraduationCap, Dog, Heart, ShoppingBag, Camera, Hotel, Sun, Package, Clock,
  BookOpen, ArrowRight, Tag, CreditCard
} from 'lucide-react';

export const IconMap = {
  Car, Plane, Map, Star, Briefcase, Train, Bus, Activity, Moon, Zap,
  GraduationCap, Dog, Heart, ShoppingBag, Camera, Hotel, Sun, Package, Clock,
  BookOpen, ArrowRight, Tag, CreditCard
};

export const getIcon = (name) => {
  return IconMap[name] || Car;
};
