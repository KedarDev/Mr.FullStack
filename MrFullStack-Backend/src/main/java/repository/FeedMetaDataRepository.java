package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resumeapp.mrfullstackbackend.jpa.FeedMetaData;

public interface FeedMetaDataRepository extends JpaRepository<FeedMetaData, Integer> {
}
