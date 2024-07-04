<?= $this->extend('partials/main'); ?>

<?= $this->section('content'); ?>

<!-- Hero Section -->
<?= view('home/partials/hero_section'); ?>
<!-- /Hero Section -->

<!-- About Section -->
<?= view('home/partials/about_section'); ?>
<!-- /About Section -->

<!-- Skills Section -->
<?= view('home/partials/skill_section'); ?>
<!-- /Skills Section -->

<!-- Resume Section -->
<?= view('home/partials/resume_section'); ?>
<!-- /Resume Section -->

<!-- Portfolio Section -->
<?= view('home/partials/portfolio_section'); ?>
<!-- /Portfolio Section -->

<!-- Contact Section -->
<?= view('home/partials/contact_section'); ?>
<!-- /Contact Section -->

<?= $this->endSection(); ?>