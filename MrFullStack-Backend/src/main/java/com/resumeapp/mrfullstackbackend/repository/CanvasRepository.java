package com.resumeapp.mrfullstackbackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resumeapp.mrfullstackbackend.jpa.Canvas;

// import org.springframework.context.annotation.Profile;

// @Profile("Visitor")
public interface CanvasRepository  extends JpaRepository<Canvas, Long>{
        Optional<Canvas> findByCanvasId(Long canvasId);
}
